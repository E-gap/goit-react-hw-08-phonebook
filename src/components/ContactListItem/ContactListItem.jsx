import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.listItem}>
      <div>
        <span className={css.icon}>
          <BsFillCircleFill
            style={{
              height: '20px',
              width: '20px',
            }}
          />
        </span>
        {name}: {number}
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContact({ id: id }));
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
