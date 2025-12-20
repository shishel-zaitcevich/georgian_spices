
// import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// const SYSTEM_INSTRUCTION = `
// You are a Georgian Culinary Expert named "Tamada Spice Guide". 
// Your goal is to help customers discover how to use authentic Georgian spices.
// Provide concise, helpful, and mouth-watering advice or recipes using spices like Khmeli Suneli, Svaneti Salt, Adjika, Blue Fenugreek, and Imeretian Saffron.
// Keep responses professional, friendly, and deeply rooted in Georgian culinary tradition.
// If asked about non-food topics, politely steer the conversation back to spices and recipes.
// `;

// export async function* getSpiceAdviceStream(userPrompt: string) {
//   try {
//     const response = await ai.models.generateContentStream({
//       model: "gemini-3-flash-preview",
//       contents: userPrompt,
//       config: {
//         systemInstruction: SYSTEM_INSTRUCTION,
//         temperature: 0.7,
//       },
//     });

//     for await (const chunk of response) {
//       const c = chunk as GenerateContentResponse;
//       yield c.text || "";
//     }
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     yield "I'm having a bit of trouble connecting to my culinary database. Please try again in a moment!";
//   }
// }
