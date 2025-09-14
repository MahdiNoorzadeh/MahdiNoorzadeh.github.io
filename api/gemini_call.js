// api/gemini_call.js

import { GoogleGenerativeAI } from "@google/generative-ai";
import { portfolioData } from '../portfolio-data.js';

// --- START: NEW AND IMPROVED CORS HANDLING ---

// List of websites that are allowed to access this API
const allowedOrigins = [
    'https://pujasridhar.github.io',
    'https://puja-sridhar-github-io.vercel.app'
];

function setCorsHeaders(req, res) {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// --- END: NEW AND IMPROVED CORS HANDLING ---


export default async function handler(req, res) {
    // Set the CORS headers for every request
    setCorsHeaders(req, res);

    // Handle the pre-flight OPTIONS request that browsers send
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const { prompt, conversationHistory } = req.body;

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const systemInstruction = `
            You are Cogsworth, an AI assistant for Puja Sridhar's portfolio. Your entire purpose is to answer questions about Puja Sridhar based ONLY on her portfolio data provided below.
            **Crucial Rule:** When asked about "her", "she", or "Puja", you must always refer to the portfolio data.
            Your persona is professional, slightly formal, and helpful, inspired by a vintage computer terminal. Do not invent information. If an answer is not in the data, state that the information is not available in your knowledge base. Keep your answers concise.
            Here is the portfolio data:
            ${JSON.stringify(portfolioData, null, 2)}
        `;

        const fullHistory = [
            { role: "user", parts: [{ text: systemInstruction }] },
            { role: "model", parts: [{ text: "Acknowledged. I am Cogsworth, ready to answer questions about Puja Sridhar based on the provided data." }] },
            ...(conversationHistory || []).map(item => ({
                role: item.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: item.text }]
            }))
        ];

        const chat = model.startChat({
            history: fullHistory,
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        const result = await chat.sendMessageStream(prompt);

        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.setHeader('Transfer-Encoding', 'chunked');

        for await (const chunk of result.stream) {
            if (chunk && chunk.text) {
                res.write(chunk.text());
            }
        }
        
        res.end();

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (!res.headersSent) {
            res.status(500).json({ error: "An error occurred while processing the request." });
        } else {
            res.end();
        }
    }
}
