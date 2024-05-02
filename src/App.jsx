import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import RecipeCard from "./components/Cards/RecipeCard";
import SearchBar from "./components/Form/SearchBar";
import Layout from "./components/layout/layout";

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipe(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = () => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <Layout>
      <SearchBar isLoading={isLoading} query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <h1 style={{ paddingLeft: "210px", fontFamily: "roboto", fontSize: "37px", fontWeight: "bold", paddingTop: "50px",  paddingBottom: "20px" }}>Restaurants</h1>
      <Box sx={{ flexGrow: 1, padding: "0 10px" }}> {/* Adjusted padding here */}
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}> {/* Reduced spacing between cards */}
          {recipe ? recipe.map((r, idx) => (
            <Grid item xs={2} sm={4} md={4} key={idx}>
              <RecipeCard key={r.idMeal} recipe={r} /> 
            </Grid>
          )) : "No Products"}
        </Grid>
      </Box>
    </Layout>
  );
};

export default HomePage;
