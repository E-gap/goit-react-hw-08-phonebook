import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contactsOperations';
import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.listItem}>
      <div className={css.text}>
        <span className={css.icon}>
          <BsFillCircleFill
            style={{
              height: '15px',
              width: '15px',
              fill: 'green',
            }}
          />
        </span>
        {name}: {number}
      </div>
      <button
        type="button"
        className={css.buttonDelete}
        onClick={() => {
          dispatch(deleteContacts(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
