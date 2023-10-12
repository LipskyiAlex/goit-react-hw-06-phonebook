import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";


export const addContact = createAction('contacts/addContact', values => {

    return {

        payload: {

            id: nanoid(),
            contact: values.name,
            number: values.number
        }
    }
})
export const deleteContact = createAction('contacts/deleteContact')
export const setFilter = createAction('filter/setFilter')

