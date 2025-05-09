// src/utils/api.js
import { showErrorAlert } from './alerts';

export const fetchApi = async (endpoint, method = 'POST', body = null) => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8090';
    
    const response = await fetch(`${backendUrl}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: body ? new URLSearchParams(body) : null
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Server error occurred');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    showErrorAlert(error.message);
    throw error;
  }
};