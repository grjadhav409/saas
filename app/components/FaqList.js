"use client";

import React from "react";
import { useState } from "react";

const FaqList = ({ faq }) => {
  const [isopen, setIsOpen] = useState(false);
  return (
    <li key={faq.question}>
      <button
        className="py-5 font-semibold border-b flex justify-between w-full"
        onClick={() => setIsOpen(!isopen)}
      >
        <p>{faq.question}</p> <span>{isopen ? "-" : "+"}</span>
      </button>
      <br />
      <div className={isopen ? "block mb-6 flex" : "hidden"}>
        <p>ANS : </p>
        {faq.answer}
      </div>
    </li>
  );
};

export default FaqList;
