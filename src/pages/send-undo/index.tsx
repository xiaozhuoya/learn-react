import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const timeoutRef = useRef(null);

  function handleSend() {
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert("已发送!");
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutRef.current);
  }

  return (
    <>
      <Toggle />
      <div></div>
      <input
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? "发送中……" : "发送"}
      </button>
      {isSending && <button onClick={handleUndo}>撤销</button>}
    </>
  );
}

export function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      {isOn ? "开" : "关"}
    </button>
  );
}
