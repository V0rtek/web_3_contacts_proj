import {useEffect, useState} from 'react';
import {getAllContacts} from '../services/contactService';

/**
 *
 * @return {Object}
 */
export default function useContactList() {
  const [contactList, setContactList] = useState([]);
  useEffect(()=>{
    getAllContacts().then((data)=>setContactList(data));
  }, []); // param 1: fonction, param 2: declencheurs

  return {contactList};
}
