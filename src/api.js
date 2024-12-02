// src/api.js
import axios from 'axios';

// Replace this with the actual API URL
const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev'; 
console.log(API_URL);


// Function to get patient data
export const getPatientData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // Returning the data to be used later
  } catch (error) {
    console.error('Error fetching patient data:', error);
    throw error;
  }
};

