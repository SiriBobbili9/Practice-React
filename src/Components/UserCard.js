const UserCard  = (props) => {
    const {name, location, contact} = props;
    return (
        <div className="user-card">
        <h3>Name: {props.name}</h3>
        <h4>Location: {location}</h4>
        <h5>Contact: {contact}</h5>
        </div>
    )
}
export default UserCard