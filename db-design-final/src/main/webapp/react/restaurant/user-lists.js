const {Link, useHistory} = window.ReactRouterDOM;
import userService from "./user-service"
const { useState, useEffect } = React;

const UserList = () => {
  const history = useHistory()
  const [users, setUsers] = useState([])
  useEffect(() => {
    findAllUsers()
  }, [])
  const findAllUsers = () =>
      userService.findAllUsers().then(users => setUsers(users))
  return(
      <div>
        <h2>User List</h2>
        <button onClick={() => history.push("/users/new")} className="btn btn-primary">
          Add User
        </button>
        <ul className="list-group">
          {
            users.map(user =>
                <li key={user.id}>
                  <Link to={`/users/${user.id}`}>
                    User ID: {user.id},
                    User First Name: {user.firstName},
                    User Last Name: {user.lastName},
                    User Username: {user.username},
                    User Email: {user.email}
                    User Date of Birth {user.dateOfBirth}
                  </Link>
                </li>)
          }

        </ul>
      </div>
  )
}

export default UserList;