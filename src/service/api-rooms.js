import fetch from "cross-fetch";

import {dataStorage} from "./api-login";

async function apiRequest(url, method, data) {
  // const dataStorage = JSON.parse(localStorage.getItem("auth_data"));

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
export const getRooms = async () => {
  try {
    const response = await apiRequest(
      `${process.env.REACT_APP_API_URL}rooms`,
      "GET"
    );
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response;
  } catch (err) {
    console.error(err);
  }
};
export const getRoom = async (id) => {
  try {
    const response = await apiRequest(
      `${process.env.REACT_APP_API_URL}rooms/${id}`,
      "GET"
    );
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const deleteRoom = async (id) => {
  try {
    const response = await apiRequest(
      `${process.env.REACT_APP_API_URL}rooms/${id}`,
      "DELETE"
    );
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }

    return response;
  } catch (err) {
    console.error(err);
  }
};

export const createRoom = async (data) => {
  try {
    const response = await apiRequest(
      `${process.env.REACT_APP_API_URL}rooms`,
      "POST",
      data
    );
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response;
  } catch (err) {
    console.error(err);
  }
};
export const editRoom = async ({ id, data }) => {
  try {
    const response = await apiRequest(
      `${process.env.REACT_APP_API_URL}rooms/${id}`,
      "PATCH",
      data
    );
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response;
  } catch (err) {
    console.error(err);
  }
};
