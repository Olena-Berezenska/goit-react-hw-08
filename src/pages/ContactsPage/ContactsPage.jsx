import React, { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm ';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  console.log(token);
  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);
  return (
    <div style={{ margin: '20px 20px' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
