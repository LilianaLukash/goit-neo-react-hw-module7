
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && contacts.length === 0 && <p>No contacts..</p>}
      {!loading && !error && contacts.length > 0 && (
        <ul className={styles.list}>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
}
