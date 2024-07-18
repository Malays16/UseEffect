import PropTypes from 'prop-types';

const List = ({ users, onUserSelect, selectedUser }) => {
  return (
    <ul className="list">
      {users.map(user => (
        <li
          key={user.id}
          onClick={() => onUserSelect(user)}
          className={`list-item ${selectedUser && selectedUser.id === user.id ? 'active' : ''}`}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default List;

List.propTypes = {
  users: PropTypes.array.isRequired,
  onUserSelect: PropTypes.func.isRequired,
  selectedUser: PropTypes.object
};