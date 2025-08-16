import React, { useState, useEffect, useCallback } from "react";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const debouncedSearch = useCallback(() => {
    if (query) onSearch(query);
  }, [query, onSearch]);

  useEffect(() => {
    const timer = setTimeout(() => debouncedSearch(), 500);
    return () => clearTimeout(timer);
  }, [query, debouncedSearch]);

  return (
    <input
      type="text"
      placeholder="Search address or POI"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 rounded w-full mb-2"
    />
  );
};

export default React.memo(SearchBox);
