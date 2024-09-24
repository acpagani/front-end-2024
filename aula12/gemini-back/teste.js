import { GoogleGenerativeAI } from "@google/generative-ai";

// Instanciando o gemini com a tua API KEY
const genAI = new GoogleGenerativeAI("AIzaSyBMfWBLO4HUQshgjDRLfnTK7SzOdz0o3x4");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "O seu conhecimento vai até que ano?";

const result = await model.generateContent(prompt);
console.log(result.response.text());