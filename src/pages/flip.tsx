/*
 * @Author: Jie Zhuo
 * @Date: 2025-02-20 16:35:27
 * @LastEditTime: 2025-02-20 17:23:39
 * @LastEditors: Jie Zhuo
 * @Description: 
 * @FilePath: \learn-react\src\pages\flip.tsx
 */
import { useState } from "react";
const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

const demo = () => {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>翻转</button>
      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
};

export default demo;
