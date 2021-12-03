import userService from "./user-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;
const CustomerFormEditor = () => {
  const {id} = useParams()
  const [user, setUser] = useState({})
  useEffect(() => {
    if(id !== "new") {
      findUserById(id)
    }
  }, []);

  const getOrders = (id) => {userService.userOrders(id)}

  const findUserById = (id) => {
    userService.findUserById(id).then(user => setUser(user))
  }
  const deleteUser = (id) =>
      userService.deleteUser(id).then(() => history.back())

  const createUser = (user) =>
      userService.createUser(user).then(() => history.back())

  const updateUser = (id, newUser) =>
      userService.updateUser(id, newUser).then(() => history.back())

  return (
      <div>
        <h2>User Editor</h2>
        <label>Id</label>
        <input value={user.id} placeholder="Auto Generated" className="form-control"/><br/>

        <label>First Name</label>
        <input onChange={(e) =>
            setUser(user => ({...user, firstName: e.target.value}))}
               value={user.firstName} className="form-control"/>

        <label>Last Name</label>
        <input onChange={(e) =>
            setUser(user =>({...user, lastName: e.target.value}))}
               value={user.lastName} className="form-control"/>

        <label>Username</label>
        <input onChange={(e) =>
            setUser(user => ({...user, username: e.target.value}))}
               value={user.username} className="form-control"/>

        <label>Password</label>
        <input onChange={(e) =>
            setUser(user => ({...user, password: e.target.value}))}
               value={user.password} className="form-control"/>

        <label>Email</label>
        <input onChange={(e) =>
            setUser(user => ({...user, email: e.target.value}))}
               value={user.email} className="form-control"/>

        <label>Date of Birth</label>
        <input onChange={(e) =>
            setUser(user => ({...user, dateOfBirth: e.target.value}))}
               value={user.dateOfBirth} className="form-control"/>
        <br/>

        <button onClick={() => {history.back()}} className="btn btn-warning">Cancel</button>
        <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
        <button onClick={() => updateUser(user.id, user)} className="btn btn-primary">Save</button>
        <button onClick={() => createUser(user)} className="btn btn-success">Create</button>

        <br/>
        <Link to={`orders/users/${user.id}`}>
          Orders Information
        </Link>
      </div>
  )
}

export default UserFormEditor