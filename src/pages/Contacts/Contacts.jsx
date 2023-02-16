import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.contacts.error);
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: '50px',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <h2>Loading contacts....</h2>}
      {error ? (
        <h2 style={{ color: 'red' }}>An error occured: {error}</h2>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export default Contacts;
