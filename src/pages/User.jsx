import axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setState(res.data);
    });
  }, []);
  return (
    <div className="w-full py-6 px-20 flex flex-wrap gap-4">
      {state.map((users) => (
        <div key={users.id} className="w-[250px] p-4 shadow-sm bg-white">
          <h1 className="font-bold">{users.username}</h1>
          <p>{users.email}</p>
        </div>
      ))}
    </div>
  );
}
