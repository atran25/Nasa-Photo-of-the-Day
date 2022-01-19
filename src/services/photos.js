import axios from 'axios';

const url = process.env.REACT_APP_NASA_API_URI;
const api_key = process.env.REACT_APP_NASA_API_KEY;
const INITIAL_PHOTOS_COUNT = 10;

const getPhotos = async () => {
  return await axios.get(
    `${url}?api_key=${api_key}&count=${INITIAL_PHOTOS_COUNT}`
  );
};

export default { getPhotos };
