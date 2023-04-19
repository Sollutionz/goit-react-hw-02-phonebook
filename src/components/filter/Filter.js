 
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
 
 