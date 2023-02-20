import ContactListItem from '../ContactListItem/ContactListItem.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter.filter);
  const isLogin = useSelector(state => state.auth.isLogin);

  const filterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const filteredContacts = filterContacts();

  const renderFilteredContacts = filteredContacts.length > 0 || isLoading;
  const notFilteredContacts =
    filteredContacts.length === 0 && contacts.length > 0;

  return (
    <div>
      {renderFilteredContacts && (
        <ul className={css.contactList}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
      {notFilteredContacts && (
        <p className={css.warning}>
          There are not such contacts in this phonebook
        </p>
      )}
      {contacts.length === 0 && isLogin && (
        <p className={css.warning}>There are not contacts in this phonebook</p>
      )}
    </div>
  );
};

export default ContactList;
