import fetch from "cross-fetch";

import { API_URL } from "./env";

async function apiRequest(url, method, data) {
  const dataStorage = JSON.parse(localStorage.getItem("auth_data"));

  const response = await fetch(url, {
    method: method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: `Bearer ${
        dataStorage !== null ? dataStorage.token.token : ""
      }`,
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
}
export const getContacts = async () => {
  try {
    const response = await apiRequest(`${API_URL}contacts`, "GET");
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response;
  } catch (err) {
    console.error(err);
  }
};
export const getContact = async (id) => {
  try {
    const response = await apiRequest(`${API_URL}contacts/${id}`, "GET");
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response;
  } catch (err) {
    console.error(err);
  }
};
export const deleteContact = async (id) => {
  try {
    const response = await apiRequest(`${API_URL}contacts/${id}`, "DELETE");
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }

    return response;
  } catch (err) {
    console.error(err);
  }
};
