import fetch from "cross-fetch";
import { API_LOGIN } from "./env";

export async function loginUser(credentials) {
  try {
    const response = await fetch(API_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const jsonResponse = await response.json();

      return jsonResponse;
    } else {
      // eslint-disable-next-line no-unused-vars
      const jsonResponse = await response.json();
    }
  } catch (error) {
    console.error(error);
  }
}
