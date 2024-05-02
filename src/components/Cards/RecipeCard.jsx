import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
    const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '130%', padding: '10px' }}>
            <Card sx={{ borderRadius: '15px', marginBottom: '30px', boxShadow: "rgba(0, 0, 0, 0.10) 0px 1px 4px", width: "400px" }}>
                <Link to={`/store/${idMeal}`} style={{ textDecoration: 'none' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '400px', height: 220, borderRadius: '15px 15px 0 0' }}
                        image={strMealThumb}
                        alt={strMeal}
                    />
                </Link>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px' }}>
                    <Link to={`/store/${idMeal}`} style={{ textDecoration: 'none', color: '#000000' }}>
                        <Typography variant="h6" style={{ marginBottom: '10px' }}>{strMeal}</Typography>
                    </Link>
                    <Typography variant="body2" color="textSecondary">{strCategory}</Typography>
                </Box>
            </Card>
        </div>
    );
}

export default RecipeCard;
