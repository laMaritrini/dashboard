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

export const dataStorage = JSON.parse(localStorage.getItem("auth_data"));

export async function apiRequest(url, method, data) {

    const response = await fetch(url, {
      method: method,
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        Authorization: `Bearer ${
          dataStorage.token.token !== null ? dataStorage.token.token : ""
        }`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  
  // console.log(dataStorage.token.token);
}
