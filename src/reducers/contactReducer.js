import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT} from '../actions/types';
import {v4 as uuidv4} from 'uuid';

const initialstate = {
        contacts: []
        // contacts: [{
        //     id: uuidv4(),
        //     name: 'Shakes Makena',
        //     email: 'shakes@supastrikas.com',
        //     phone: '323-232-4232'
        // },
        // {
        //     id: uuidv4(),
        //     name: 'El Matador',
        //     email: 'matador@supastrikas.com',
        //     phone: '323-232-4232'
        // },
        // { 
        //     id: uuidv4(),
        //     name: 'Dancing Rasta',
        //     email: 'dRasta@supastrikas.com',
        //     phone: '323-232-4232'
        // },
        // {
        //     id: uuidv4(),
        //     name: 'Cool Joe',
        //     email: 'cJoe@supastrikas.com',
        //     phone: '323-232-4232'
        // }]
    
};

export default function (state = initialstate, action) {

switch ((action.type)) {

    case GET_CONTACTS:
        return {...state };

    case ADD_CONTACT:
        return {
            ...state, contacts: [action.payload, ...state.contacts]
        };
        
    case DELETE_CONTACT:
        return {
            ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };

    default:
        return state;    
}
}