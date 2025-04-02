import { useRef } from "react";

function DebouncedButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  const timeoutRef = useRef<number | null>(null);

  return (
    <button
      onClick={() => {
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton onClick={() => alert("宇宙飞船已发射！")}>
        发射宇宙飞船
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("汤煮好了！")}>
        煮点儿汤
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("摇篮曲唱完了！")}>
        唱首摇篮曲
      </DebouncedButton>
    </>
  );
}
