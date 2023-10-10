import { nanoid } from "nanoid";


export const addContact = values => {

    return {

        type: 'contacts/addContact',
        payload: {
    
            id:nanoid(),
            name: values.name,
            number: values.number
           
        }
    }
}

export const deleteContact = contactId => {

    return {

        type: 'contacts/deleteContact',
          payload: contactId,
    }
}

export const setFilter = value => {

    return {

        type: 'filter/setFilter',
        payload: value
    }
}