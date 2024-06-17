"use client"
import { useState } from "react";

const ChangeName = ({ displayName }: { displayName: string }) => {
  const [name, setName] = useState(displayName);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="w-full rounded-md text-xl font-bold"
      />
    </div>
  )
}

export default ChangeName