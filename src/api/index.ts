import axios from 'axios';

export const getPhotos = async (page: number): Promise<[] | undefined> => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos?per_page=7&page=${page}`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
