import { useState } from "react";
import c from "./heart.module.css";

function Heart({handleClick, isFavourite}) {
  const coonditionalClass = isFavourite ? c.filled : c.plain
  
  return (
    <>
      <div onClick={handleClick} className={`${c.heart} ${coonditionalClass}`}></div>
    </>
  );
}

export default Heart