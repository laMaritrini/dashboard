import fetch from "cross-fetch";

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
export const getBookings = async () => {
  try {
    const response = await apiRequest(
      `${process.env.REACT_APP_API_URL}bookings`,
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
export const getBooking = async (id) => {
  try {
    const response = await apiRequest(
      `${process.env.REACT_APP_API_URL}bookings/${id}`,
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
export const deleteBooking = async (id) => {
  try {
    const response = await apiRequest(
      `${process.env.REACT_APP_API_URL}bookings/${id}`,
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

export const createBooking = async (data) => {
  try {
    const response = await apiRequest(
      `${process.env.REACT_APP_API_URL}bookings`,
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
export const editBooking = async ({ id, data }) => {
  try {
    const response = await apiRequest(
      `${process.env.REACT_APP_API_URL}bookings/${id}`,
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
