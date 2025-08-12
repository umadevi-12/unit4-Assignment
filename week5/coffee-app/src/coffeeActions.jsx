import axios from "axios";

export const fetchCoffee = (sortBy = "") => async (dispatch) => {
  dispatch({ type: "FETCH_COFFEE_REQUEST" });
  try {
    const res = await axios.get(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"
    );
    let data = res.data.data;

    if (sortBy === "name") {
      data = data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "price") {
      data = data.sort((a, b) => a.price - b.price);
    }

    dispatch({ type: "FETCH_COFFEE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_COFFEE_FAILURE", payload: error.message });
  }
};
