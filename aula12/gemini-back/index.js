import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { GoogleGenerativeAI } from "@google/generative-ai";

// Configurar o endpoint
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

app.post("/sendMessage", async (req, res) => {
    const { messages } = req.body
    console.log(messages)

    const genAI = new GoogleGenerativeAI("AIzaSyBMfWBLO4HUQshgjDRLfnTK7SzOdz0o3x4");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt = messages
    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    res.json({
        chat_completion: result.response.text()
    })
})

app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://localhost:${port}`);
})