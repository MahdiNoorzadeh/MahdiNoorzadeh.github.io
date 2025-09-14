// api/gemini_call.js

import { GoogleGenerativeAI } from "@google/generative-ai";
import { portfolioData } from '../portfolio-data.js';

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', 'https://pujasridhar.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

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

        // This is the core instruction for the AI. It's now more explicit.
        const systemInstruction = `
            You are Cogsworth, an AI assistant for Puja Sridhar's portfolio. Your entire purpose is to answer questions about Puja Sridhar based ONLY on her portfolio data provided below.

            **Crucial Rule:** When asked about "her", "she", or "Puja", you must always refer to the portfolio data.

            Your persona is professional, slightly formal, and helpful, inspired by a vintage computer terminal. Do not invent information. If an answer is not in the data, state that the information is not available in your knowledge base. Keep your answers concise.

            Here is the portfolio data:
            ${JSON.stringify(portfolioData, null, 2)}
        `;

        // We construct the full chat history, starting with the system instruction.
        const fullHistory = [
            // The model treats the first user message as its primary instruction.
            { role: "user", parts: [{ text: systemInstruction }] },
            // We prime the model by having it "acknowledge" the instruction.
            { role: "model", parts: [{ text: "Acknowledged. I am Cogsworth, ready to answer questions about Puja Sridhar based on the provided data." }] },
            // Now, we add the actual conversation history from the website.
            ...(conversationHistory || []).map(item => ({
                // The API uses 'model' for the assistant's role, so we map it.
                role: item.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: item.text }]
            }))
        ];

        const chat = model.startChat({
            history: fullHistory, // Pass the complete history
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        const result = await chat.sendMessageStream(prompt);

        // Set headers for streaming text
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.setHeader('Transfer-Encoding', 'chunked');

        // Stream the response back to the client
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
