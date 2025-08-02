import React, { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  const corrections = {
    "teh": "the",
    "recieve": "receive",
    "adress": "address",
    "wierd": "weird",
    "thier": "their"
  };

  const words = text.split(" ");
  let correctedCount = 0;

  const correctedWords = words.map((word) => {
    const lower = word.toLowerCase();
    if (corrections[lower]) {
      correctedCount++;
      return corrections[lower];
    }
    return word;
  });

  const correctedText = correctedWords.join(" ");

  return (
    <div style={{ padding: "20px" }}>
      <h1>AutoCorrect App</h1>
      <textarea value={text}  onChange={(e) => setText(e.target.value)} placeholder="Type something..."  rows={4} cols={50}
        style={{ fontSize: "16px", padding: "10px", width: "100%" }}
      />
      <div style={{ marginTop: "20px" }}>
        <h3>Corrected Preview:</h3>
        <p style={{ fontSize: "18px", color: "green" }}>{correctedText}</p>
        <p><strong>Words corrected:</strong> {correctedCount}</p>
      </div>
    </div>
  );
}

export default App;
