import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { defaultContacts } from 'components/data/DefaultContacts';

const id = nanoid();

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defaultContacts,
  reducers: {
    addContact: (state, { payload }) => {
      const { name, number } = payload;
      const contact = { id, name, number };
      state.push(contact);
    },

    removeContact: (state, { payload }) => {
      const { id } = payload;
      return state.filter(contact => contact.id !== id);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;