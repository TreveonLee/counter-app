import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Tap + to start counting!");

  const increment = () => {
    const n = count + 1;
    setCount(n);
    if (n === 10) {
      setMessage("Yay, You've reached 10!");
    } else if (n % 10 === 0 && n > 10) {
      setMessage("You reached " + n + "!");
    } else {
      setMessage("");
    }
  };

  const decrement = () => {
    if (count <= 0) {
      setMessage("Counter cannot go below 0!");
      return;
    }
    const n = count - 1;
    setCount(n);
    if (n === 0) {
      setMessage("Counter is at zero.");
    } else {
      setMessage("");
    }
  };

  const reset = () => {
    setCount(0);
    setMessage("Counter has been reset.");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f0f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: 20,
      }}
    >
      <h1 style={{ fontSize: 30, fontWeight: "bold", color: "#333333", margin: 0 }}>
        Counter App
      </h1>
      <p style={{ fontSize: 14, color: "#888888", margin: "2px 0 30px" }}>
        CS50 Mobile - React Native
      </p>

      <div
        style={{
          backgroundColor: "#ffffff",
          width: 160,
          height: 160,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 15,
          border: "3px solid #007AFF",
        }}
      >
        <span style={{ fontSize: 60, fontWeight: "bold", color: "#007AFF" }}>
          {count}
        </span>
      </div>

      <p
        style={{
          fontSize: 16,
          color: "#666666",
          height: 25,
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        {message}
      </p>

      <button
        onClick={increment}
        style={{
          width: 220,
          padding: "14px 0",
          borderRadius: 10,
          border: "none",
          backgroundColor: "#34C759",
          color: "#ffffff",
          fontSize: 18,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 12,
        }}
      >
        + Increment
      </button>

      <button
        onClick={decrement}
        style={{
          width: 220,
          padding: "14px 0",
          borderRadius: 10,
          border: "none",
          backgroundColor: "#FF3B30",
          color: "#ffffff",
          fontSize: 18,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 12,
        }}
      >
        - Decrement
      </button>

      <button
        onClick={reset}
        style={{
          width: 220,
          padding: "14px 0",
          borderRadius: 10,
          border: "2px solid #cccccc",
          backgroundColor: "#ffffff",
          color: "#666666",
          fontSize: 18,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 12,
        }}
      >
        Reset
      </button>
    </div>
  );
}
