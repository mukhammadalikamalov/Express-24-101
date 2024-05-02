import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Layout from "../components/layout/layout";

const FoodById = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      if (data.meals && data.meals.length > 0) {
        setRecipe(data.meals[0]);
      } else {
        setRecipe(null);
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipe(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </Layout>
    );
  }

  if (!recipe) {
    return (
      <Layout>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Typography variant="h4">Recipe not found</Typography>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box display="flex" alignItems="center" paddingLeft={2} paddingTop={1}>
        <Link to="/" style={{ textDecoration: 'none', color: "#8E8E93", display: "flex", alignItems: "center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95003 13.93C6.89003 12.87 6.89003 11.13 7.95003 10.07L14.47 3.55002C14.76 3.26002 15.24 3.26002 15.53 3.55002C15.82 3.84002 15.82 4.32002 15.53 4.61002L9.01003 11.13C8.53003 11.61 8.53003 12.39 9.01003 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z" fill="gray"></path>
          </svg>
          <Typography variant="body1" style={{ marginLeft: "5px" }}>Back</Typography>
        </Link>
      </Box>
      <Box paddingLeft={2} marginTop={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          maxWidth={900}
          marginX="auto"
          borderRadius={8}
          boxShadow={3}
          p={3}
        >
          <Typography variant="h4" component="h1" gutterBottom>{recipe.strMeal}</Typography>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '850px', height: '400px', borderRadius: 8 }} />
          <Typography variant="body1" gutterBottom>{recipe.strInstructions}</Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default FoodById;
