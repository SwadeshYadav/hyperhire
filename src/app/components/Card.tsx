"use client";
import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card(props: { imagen: string | undefined }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      className={`${Styles.card} bg-white p-4 shadow-lg rounded-md`} 
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={props?.imagen} alt="" />
      <h2 className="text-center text-[18px]">Abhishek Gupta</h2>
      <h2 className="text-center text-[16px]">Marketing · 2y+</h2>
      <h2 className="border border-gray-400 rounded-md p-1 text-black text-center">Marketing content creation</h2>
      <h2 className="border border-gray-400 rounded-md p-1 text-black text-center">
        Instagram Management
      </h2>
      <div
        className="flex flex-row mt-2 gap-2 text-[14px] text-[14px] p-1 text-black"
      >
        <h2 className="border border-gray-400 rounded-md p-1 text-black text-center">
          Twitter Management
        </h2>
        <h2 className="border border-gray-400 rounded-md p-1 text-black text-center">
          Write a blog post
        </h2>
      </div>
    </animated.div>
  );
}

export default Card;
