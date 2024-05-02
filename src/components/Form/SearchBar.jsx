import SearchIcon from "@mui/icons-material/Search"; // Importing the search icon
import React from "react";

const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
  return (
    <form onSubmit={handleSubmit} style={{ position: "relative", paddingLeft: "205px", paddingTop: "20px" }}>
      <input
        type="text"
        placeholder="Заведение, блюдо, товар или кухня"
        value={query}
        disabled={isLoading}
        onChange={(event) => setQuery(event.target.value)}
        style={{
          paddingLeft: "30px", // Adjust padding to accommodate the search icon
          backgroundColor: "#FFFFFF", // Yellow background color
          borderRadius: "10px", // Rounded corners
          border: "1px solid #D1D1D6", // Border
          outline: "none", // Remove default input outline
          width: "360px", // Adjust width as needed
          height: "50px",
          fontSize: "17px",
          color: "#AB8E93",
          padding: "0 0 0 35px"
        }}
      />
      {/* Search Icon */}
      <SearchIcon
        style={{
          position: "absolute",
          top: "65%",
          left: "210px",
          transform: "translateY(-50%)", // Center vertically
          color: "#000000", // Color of the search icon
        }}
      />
    </form>
  );
};

export default SearchBar;
