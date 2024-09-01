import axios from 'axios';

export async function getCharacters() {
  try {
    const response = await axios.get('https://swapi.dev/api/people/');
    return response.data.results; // Extract the character data from the response
  } catch (error) {
    console.error('Error fetching characters:', error);
    return []; // Return an empty array in case of error
  }
}