import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";
import React from "react";

import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="183, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />{" "}
      <Hero />
    </div>
  );
}
