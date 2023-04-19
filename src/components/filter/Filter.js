import PropTypes from "prop-types";
export const Filter = ({filter, onChange})=> {
    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
        onChange={onChange}
        value={filter}
        />
      </>
    );
    
}
 
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
 
 