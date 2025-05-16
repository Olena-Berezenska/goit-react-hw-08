import React from 'react';
import Contact from '../Contact/Contact';
import st from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';

const ContactList = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <>
      <ul className={st.listOfContacts}>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contactdata={contact} />
        ))}
      </ul>
      {loading && <h2>loading...</h2>}
      {error && <h2>Server is dead...</h2>}
    </>
  );
};

export default ContactList;
