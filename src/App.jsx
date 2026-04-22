import { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [response, setResponse] = useState("");

  const saveNote = async () => {
    const res = await fetch("https://oj07e9g16f.execute-api.us-east-1.amazonaws.com/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ note })
    });

    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notes App 🚀</h1>
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter note"
      />
      <button onClick={saveNote}>Save</button>

      <p>{response}</p>
    </div>
  );
}

export default App;