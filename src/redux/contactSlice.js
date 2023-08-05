import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { defaultContacts } from 'components/data/DefaultContacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defaultContacts,
  reducers: {
    addContact: (state, { payload }) => {
      const { name, number } = payload;
      const id = nanoid();
      const includesName = state.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );

      if (!includesName) {
        const contact = { id, name, number };
        state.push(contact);
      }
    },

    removeContact: (state, { payload }) => {
      const { id } = payload;
      return state.filter(contact => contact.id !== id);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;