

import styles from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.item}>
      <div>
        <IoPersonSharp /> {contact.name}
      </div>
      <div>
        <FaPhone /> {contact.number}
      </div>
      <button className={styles.button} onClick={handleDelete}>
        Видалити
      </button>
    </li>
  );
}
