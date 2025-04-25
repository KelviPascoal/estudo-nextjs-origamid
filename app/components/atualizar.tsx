"use client";

import React from "react";
import {
  revalidatePathAction,
  revalidateTagAction,
} from "../actions/revalidate-path";

export default function Atualizar() {
  const handleClick = () => {
    // revalidatePathAction("/acoes");
    revalidateTagAction("acoes");
  };

  //   React.useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       revalidatePathAction("/acoes");
  //     }, 5000);
  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }, []);
  return <button onClick={handleClick}>Atualizar</button>;
}
