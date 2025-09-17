# Puja Sridhar - Interactive AI Portfolio

Welcome to my interactive portfolio, a unique terminal-style website powered by a custom **Retrieval-Augmented Generation (RAG)** pipeline. The AI assistant, **Cogsworth**, leverages Google's Gemini 1.5 Flash and a Pinecone vector database to provide highly accurate, context-aware answers about my professional background.

![Portfolio Screenshot](Terminal.png)

---

## Key Features

* **🤖 RAG-Powered AI Assistant**: Powered by **Google Gemini 1.5 Flash** and a **Pinecone** vector database, Cogsworth uses a Retrieval-Augmented Generation (RAG) pipeline. This allows it to provide answers grounded in my specific resume and project data, minimizing hallucinations and ensuring high accuracy.
* **💻 Dual Interface**: Seamlessly switch between two distinct views:
    * **Terminal View**: A retro, command-line interface where you can use commands like `help`, `projects`, and `skills` to navigate.
    * **Standard GUI View**: A modern, tab-based graphical user interface for a more traditional browsing experience.
* **🎨 Customizable Theme**: Toggle between a sleek **light mode** and a classic **dark mode**.
* **🌐 Live Data**: The interface includes a real-time clock and a local weather display that fetches data based on your location.
* **✨ Dynamic UI**: A subtle, animated network graphic in the background and interactive sound effects create an immersive experience.
* **📱 Fully Responsive**: Designed to work flawlessly across desktop, tablet, and mobile devices.


---

## How It Works: The RAG Pipeline 🧠

When you ask Cogsworth a question, it doesn't just pass the query to an LLM. It uses a sophisticated RAG pipeline to ensure the answer is relevant and factually correct based on my portfolio data.

1.  **Query Embedding**: Your question is converted into a numerical vector representation (an embedding).
2.  **Vector Search**: This vector is used to search the **Pinecone** database for the most semantically similar chunks of my professional data (experience, project details, skills, etc.).
3.  **Context Augmentation**: The relevant data retrieved from Pinecone is combined with your original question into an augmented prompt.
4.  **LLM Generation**: This detailed prompt is sent to **gemini-2.5-flash-lite**, which generates a coherent, context-aware answer based *only* on the information provided.

This process makes the assistant a true expert on my profile, providing answers that are both conversational and factually grounded.

---


## Tech Stack

* **Frontend**: HTML5, CSS3, Vanilla JavaScript
* **Styling**: Tailwind CSS
* **AI & Data Pipeline**:
    * **LLM**: Google Gemini 1.5 Flash
    * **Vector Database**: Pinecone
    * **Backend**: Vercel Serverless Functions

---

## Local Setup & Installation 🚀

To run this project locally, you'll need Node.js, the Vercel CLI, and API keys for Google and Pinecone.

### Prerequisites

* **Node.js**: Download from [nodejs.org](https://nodejs.org/).
* **Vercel Account & CLI**: A free Vercel account is required.
* **Google Gemini API Key**: Get a free key from [Google AI Studio](https://aistudio.google.com/app/apikey).
* **Pinecone Account & API Key**: Get a free key from [pinecone.io](https://www.pinecone.io/). You will also need your index name and environment.

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/PujaSridhar/PujaSridhar.github.io.git](https://github.com/PujaSridhar/PujaSridhar.github.io.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd PujaSridhar.github.io
    ```
3.  **Install the Vercel CLI globally:**
    ```bash
    npm install -g vercel
    ```
4.  **Data Ingestion**:
    * This setup assumes you have already populated your Pinecone index. You will need a separate script to process, embed, and upload your portfolio data into your Pinecone index.
5.  **Create an environment variable file:**
    Create a new file named `.env` in the project root. Add your API keys and Pinecone details.
    ```env
    # Google AI
    GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"

    # Pinecone Vector DB
    PINECONE_API_KEY="YOUR_PINECONE_API_KEY_HERE"
    PINECONE_ENVIRONMENT="YOUR_PINECONE_ENVIRONMENT_HERE"
    PINECONE_INDEX_NAME="your-pinecone-index-name"
    ```
6.  **Run the local development server:**
    This command runs the frontend and the serverless functions in the `/api` directory.
    ```bash
    vercel dev
    ```
    Your project will now be running at a local address, typically `http://localhost:3000`.

---

## Contact

Let's connect! You can find me on the following platforms:

* **LinkedIn:** [linkedin.com/in/pujasridhar](https://www.linkedin.com/in/pujasridhar/)
* **GitHub:** [github.com/pujasridhar](https://github.com/pujasridhar)
* **Email:** [pujasridhar28@gmail.com](mailto:pujasridhar28@gmail.com)