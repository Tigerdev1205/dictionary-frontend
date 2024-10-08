import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/dictionary/translate?word=${word}`
      );
      setTranslation(response.data.translation);
      setError("");
    } catch (err) {
      setTranslation("");
      setError("Translation not found");
    }
  };

  return (
    <div className="container">
      <h1>Dictionary</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter an English word"
      />
      <button onClick={handleTranslate}>Translate</button>
      {translation && (
        <p className="message translation">Translation: {translation}</p>
      )}
      {error && <p className="message error">{error}</p>}
    </div>
  );
}

export default App;
