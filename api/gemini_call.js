// Import the Google Generative AI SDK
const { GoogleGenerativeAI } = require("@google/generative-ai");

// --- NEW: In-memory cache ---
// This simple object will store responses. For a production app with high traffic,
// you might use a more robust solution like Redis, but this is perfect for a portfolio.
const cache = new Map();

// This function will handle incoming requests from your portfolio site
export default async function handler(req, res) {
  // Set CORS headers to allow requests from your GitHub Pages domain
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://pujasridhar.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests for CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Ensure this function only responds to POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { prompt, portfolioData } = req.body;

    // --- NEW: Check the cache first ---
    if (cache.has(prompt)) {
      // If the question has been asked before, return the saved answer
      console.log(`Returning cached response for: "${prompt}"`);
      return res.status(200).json({
        candidates: [{
          content: {
            parts: [{ text: cache.get(prompt) }]
          }
        }]
      });
    }

    // If the prompt is not in the cache, proceed to call the API
    console.log(`Fetching new response from API for: "${prompt}"`);
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const detailedPrompt = `
      You are Cogsworth, an AI assistant for Puja Sridhar's portfolio. 
      Your personality is professional, slightly formal, and helpful, inspired by a vintage computer terminal.
      Your purpose is to answer questions about Puja Sridhar based ONLY on the portfolio data provided below.
      Do not invent information. If the answer is not in the data, state that the information is not available in your knowledge base.
      Keep your answers concise and to the point.

      Here is the portfolio data in JSON format:
      ${JSON.stringify(portfolioData, null, 2)}

      Now, please answer the following user question: "${prompt}"
    `;

    const result = await model.generateContent(detailedPrompt);
    const response = await result.response;
    const text = response.text();

    // --- NEW: Save the new response to the cache ---
    cache.set(prompt, text);

    // Send the AI's response back to your portfolio website
    res.status(200).json({
      candidates: [{
        content: {
          parts: [{ text: text }]
        }
      }]
    });

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "An error occurred while processing the request." });
  }
}
