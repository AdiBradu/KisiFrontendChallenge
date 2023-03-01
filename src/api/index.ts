import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

export const getPhotos = async (per_page: number): Promise<[] | undefined> => {
  try {
    const response = await axios.post(
      'http://localhost:5050/upcomings',
      {
        per_page: per_page,
      },
      {
        headers: {
          Authorization: process.env.UNSPLASH_ACCESS_KEY,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
