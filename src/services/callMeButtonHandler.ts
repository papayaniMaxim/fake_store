import React, { MouseEvent } from "react";

export default function callMeButtonHandler(e: React.SyntheticEvent) {
  const element = e.target;
  let x = 0;
  let y = 0;

  const mouseMoveListener = (e: any) => {
    x = e.clientX;
    y = e.clientY;
  };

  element.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", mouseMoveListener);
  });

  console.log(x, y);

  element.addEventListener("mouseout", () => {
    document.removeEventListener("mousemove", mouseMoveListener);
  });

  console.log(x, y);
}
