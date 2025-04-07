async function sendToBackend(text) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const response = await fetch(`${BACKEND_URL}/api/voice_logic`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  const data = await response.json();
  console.log("🤖 AI reply:", data.reply);
  console.log("🧠 Detected emotion:", data.emotion);

  document.getElementById("ai-response").innerText = data.reply;
}
