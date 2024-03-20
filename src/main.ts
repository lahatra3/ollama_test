import { Ollama } from "ollama";
import * as dotenv from "dotenv";

dotenv.config();

(async() => {
    const host = process.env["OLLAMA_HOST"];
    const ollama = new Ollama({ host });
    const response = await ollama.chat({
        model: "llama2",
        messages: [
            { role: 'user', content: 'What is llama2 ?' }
        ],
        stream: true
    });
    for await (const part of response) {
        process.stdout.write(part.message.content);
    }
})();