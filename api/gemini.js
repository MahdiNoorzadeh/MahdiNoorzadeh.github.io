// Import the Google Generative AI SDK
const { GoogleGenerativeAI } = require("@google/generative-ai");

// This function will handle incoming requests from your portfolio site
export default async function handler(req, res) {
  // Ensure this function only responds to POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Access your secret Gemini API key from Vercel's environment variables
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Get the user's prompt and your portfolio data from the request
    const { prompt, portfolioData } = req.body;

    // --- Create a detailed prompt for the AI ---
    // This instructs the AI on its persona ("Cogsworth") and provides it with
    // all the necessary context from your portfolio to answer questions accurately.
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

    // Send the detailed prompt to the Gemini model
    const result = await model.generateContent(detailedPrompt);
    const response = await result.response;
    const text = response.text();

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
