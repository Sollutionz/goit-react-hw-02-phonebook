import PropTypes from 'prop-types';
import { ContactItem } from 'components/contactItem/ContactItem';

export const ContactList = ({contacts}) => {
    return (
      <ul>
        {contacts.map(item => (
          <li key={item.id}>
            <ContactItem name={item.name} number={item.number} />
          </li>
        ))}
      </ul>
    );
}