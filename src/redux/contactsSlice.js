import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({

  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            contact: values.name,
            number: values.number,
          },
        };
      },
    },

    deleteContact(state, action) {
      return state.filter(({id}) => id !== action.payload);
    },
  },
});

export const {addContact,deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
