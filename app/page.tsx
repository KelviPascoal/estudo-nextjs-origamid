"use client";

import styles from "./page.module.css";
import { getCookie, setCookie } from "./actions/set-cookie";
import React from "react";

export default async function Home() {
  const [value, setValue] = React.useState("");
  const handleClick = async () => {
    const response = await setCookie("Segredo", "777");
    console.log("🚀 ~ handleClick ~ response:", response);
    setValue(response.value);
  };

  const handleGetCookie = async () => {
    const value = await getCookie("Segredo");
    if (!!value) setValue(value);
  };

  return (
    <div className={styles.page}>
      <main>
        <h3>Home: {value}</h3>
        <button onClick={handleClick}>Definir Cookie</button>

        <button onClick={handleGetCookie}>getCookie</button>
      </main>
    </div>
  );
}
