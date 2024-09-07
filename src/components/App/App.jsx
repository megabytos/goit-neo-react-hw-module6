import { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import defaultContacts from '../../data/contacts.json';
import './App.css';

function App() {
  const contactsKey = 'contacts';
  const [query, setQuery] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(contactsKey);
    return savedContacts == null ? defaultContacts : JSON.parse(savedContacts);
  });

  useEffect(() => {
    localStorage.setItem(contactsKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  const onSearch = async text => {
    setQuery(text);
  };

  const filteredContacts =
    query.length > 0 ? contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase())) : contacts;

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox query={query} onSearch={onSearch} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
