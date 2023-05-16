import axios from "axios";
import "dotenv/config";

const PIXABAY_API = process.env.PIXABAY_API;

//Pagination function according to the client side requirements retrieve photos from the Pixabay API based on a specified category, page, and limit.
export const getPhotos = async (req, res) => {
  try {
    const { category, page, limit } = req.query;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // Send a GET request to the Pixabay API to retrieve photos based on the category
    const response = await axios.get(`${PIXABAY_API}&q=${category}`);

    const photosList = response.data.hits;

    // Extract the subset of photos based on the requested page and limit
    const resultPhotos = photosList.slice(startIndex, endIndex);

    // Send the resulting photos as the response
    res.status(200).json(resultPhotos);
  } catch (err) {
    // If an error occurs , send an error response with the error message
    res.status(500).json({ message: err.message });
  }
};

//Sorting function on the images by ID
export const getSortedPhotosById = async (req, res) => {
  try {
    // Extract the "photos" property from the request body
    const { photos } = req.body;

    // Sort the photos array by their ID in ascending order
    const sortedPhotos = photos.sort((a, b) => a.id - b.id);

    // Send the sorted photos as a JSON response
    res.json(sortedPhotos);
  } catch (error) {
    // If an error occurs , send an error response with the error message
    res.status(500).json({ error: "Failed to fetch and sort images" });
  }
};
