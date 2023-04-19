export const ContactItem = ({name,number}) => {
    return (
        <>
            <span>{name}: {number}</span>
            <button type="button">Delete</button>
        </>
    )
}