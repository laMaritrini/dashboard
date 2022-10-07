import fetch from "cross-fetch";

import { API_URL } from "./env";

async function apiRequest(url, method, data) {
  const dataStorage = JSON.parse(localStorage.getItem("auth_data"));

  const token = dataStorage.token;
  const response = await fetch(url, {
    method: method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  }
}
export const getBookings = async () => {
  try {
    const response = await apiRequest(`${API_URL}bookings`, "GET");
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response;
  } catch (err) {
    console.error(err);
  }
};
export const getBooking = async (id) => {
  try {
    const response = await apiRequest(`${API_URL}bookings/${id}`, "GET");
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response;
  } catch (err) {
    console.error(err);
  }
};
