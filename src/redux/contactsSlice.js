import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = { items: [] };

const contactsSlice = createSlice({

  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state,action) {
      
        state.items.push(action.payload);
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
     
      state.items = state.items.filter(({id}) => id !== action.payload);
    },
  },
});

export const {addContact,deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
