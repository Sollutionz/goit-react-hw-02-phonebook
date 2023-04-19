import PropTypes from 'prop-types';
export const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
}
