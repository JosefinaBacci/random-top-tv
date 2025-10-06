export default async function handler(req, res) {
    try {
        const movieResponse = await fetch("https://other-movie-service.com/random");
        const movieData = await movieResponse.json();

        const priceResponse = await fetch("https://other-price-service.com/price");
        const priceData = await priceResponse.json();

        res.status(200).json({
            titulo: movieData.title,
            imagenfondo: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
            resumen: movieData.overview,
            precio: priceData.price
        });
    } catch (error) {
        res.status(500).json({ error: "Error fetching movie and price" });
    }
}
