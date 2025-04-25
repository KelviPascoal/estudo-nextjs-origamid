"use server";

import { cookies } from "next/headers";

export async function setCookie(key: string, value: string) {
  (await cookies()).set(key, value, {
    httpOnly: true,
  });
  return { definido: true, key, value };
}

export async function getCookie(key: string) {
  const response = (await cookies()).get(key);
  return response?.value;
}
