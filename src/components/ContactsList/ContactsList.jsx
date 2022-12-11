import PropTypes from 'prop-types';
import style from './ContactsList.module.css'

export const ContactsList = ({ contacts, toDelete }) => (
  <ul className={style.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <li className={style.contactsItem} key={id}>
        <p>
          {name}: {number}
        </p>
            <button className={style.contactBtn}type="submit" onClick={() => toDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);


ContactsList.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    toDelete: PropTypes.func.isRequired,
}