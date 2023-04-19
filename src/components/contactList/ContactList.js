import PropTypes from 'prop-types';
import { ContactItem } from 'components/contactItem/ContactItem';

export const ContactList = ({contacts, deleteContact}) => {
    return (
      <ul>
        {contacts.map(item => (
          <li key={item.id}>
            <ContactItem name={item.name} id={item.id}number={item.number} deleteContact={deleteContact} />
          </li>
        ))}
      </ul>
    );
}


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired
    ).isRequired
  ),
  deleteContact: PropTypes.func.isRequired
}