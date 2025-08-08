import React, { useEffect, useState, useReducer } from "react";

const initialState = {
  countries: [],
  loading: false,
  error: null,
  page: 1,
  perPage: 10,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, countries: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
}

const CountryList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    fetch("https://api.first.org/data/v1/countries")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: Object.values(data.data) });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  }, []);

  if (state.loading) return <p>Loading countries...</p>;
  if (state.error) return <p>Error: {state.error}</p>;

  return (
    <div>
      <h2>Countries List</h2>
      <ul>
        {state.countries.slice(0, state.perPage).map((country) => (
          <li key={country.country}>
            {country.country} - {country.countryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
