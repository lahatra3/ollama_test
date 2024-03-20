import { Ollama } from "ollama";

(async() => {
    const ollama = new Ollama({ host: "http://ollama:11434" });
    const response = await ollama.chat({
        model: "llama2",
        messages: [
            { role: 'user', content: 'Hello' }
        ],
        stream: true
    });
    
    for await (const part of response) {
        process.stdout.write(part.message.content)
    }
})();