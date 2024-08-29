import axios from "axios";
import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";

export default function Coments() {
  const [state, setState] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/comments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        _limit: 10,
      },
    })
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div
      className={
        theme === "light"
          ? "w-full bg-slate-100 h-full flex p-6 flex-wrap gap-4"
          : "w-full h-full bg-slate-800 flex p-6 flex-wrap gap-4"
      }
    >
      {state.map((coments) => (
        <div
          key={coments.id}
          className={
            theme === "light"
              ? "w-[300px] p-4 bg-white shadow-md rounded-md"
              : "w-[300px] p-4 bg-cyan-500 text-white shadow-md rounded-md"
          }
        >
          <h1 className="font-semibold text-black">{coments.email}</h1>
          <p>{coments.body}</p>
        </div>
      ))}
    </div>
  );
}
