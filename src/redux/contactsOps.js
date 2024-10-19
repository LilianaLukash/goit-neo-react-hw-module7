import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Встановлення базового URL для axios
axios.defaults.baseURL = 'https://6712ba4f6c5f5ced66247dde.mockapi.io/';

// Операція для отримання всіх контактів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data; // Масив контактів
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для додавання нового контакту
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data; // Новий контакт з ID
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId; // Повертаємо ID, щоб видалити контакт зі стану
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
