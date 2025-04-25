"use client";

import styles from "./page.module.css";
import { setCookie } from "./actions/set-cookie";
import React from "react";

export default async function Home() {
  const [value, setValue] = React.useState("");
  const handleClick = async () => {
    const response = await setCookie("Segredo", "777");
    console.log("🚀 ~ handleClick ~ response:", response);
    setValue(response.value);
  };

  return (
    <div className={styles.page}>
      <main>
        <h1>Home: {value}</h1>
        <button onClick={handleClick}>Definir Cookie</button>
      </main>
    </div>
  );
}
