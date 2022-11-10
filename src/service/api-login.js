import fetch from "cross-fetch";


export async function loginUser(credentials) {
  try {
    const response = await fetch(process.env.REACT_APP_API_LOGIN, {
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
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.error(error);
  }
}
