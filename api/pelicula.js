import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/api/pelicula", async (req, res) => {
    try {
    // Replace these URLs with the other microservices you use
    const movieResponse = await fetch("https://other-movie-service.com/random");
    const movieData = await movieResponse.json();

    const priceResponse = await fetch("https://other-price-service.com/price");
    const priceData = await priceResponse.json();

    const result = {
        titulo: movieData.title,
        imagenfondo: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
        resumen: movieData.overview,
        precio: priceData.price
    };

    res.json(result);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching movie and price" });
    }
});

export default app;
