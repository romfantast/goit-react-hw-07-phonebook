import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsInitialState,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            ...name,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;
