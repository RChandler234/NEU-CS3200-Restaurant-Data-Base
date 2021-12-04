import orderService from "./order-service"
const {useState, useEffect} = React;
const {useParams, Link, useHistory} = window.ReactRouterDOM;
const OrderFormEditor = () => {
  const {id} = useParams()
  var {userId} = useState({})
  var {dishId} = useState({})
  const [order, setOrder] = useState({dish:{id:null}, user:{id:null}})
  useEffect(() => {
    if(id !== "new") {
      findOrderById(id)
      order.dish.id = 123;
      order.user.id = 123;
    }
  }, []);

  const checkDishLink = () => {
    let path;
    order.dish.id === null ?  path = "/dishes"
        : path = "/dishes/" + order.dish.id;
    return path;
  }

  const checkUserLink = () => {
    let path;
    order.user.id === null ?  path = "/users"
        : path = "/users/" + order.user.id;
    return path;
  }

  const findOrderById = (id) => {
      orderService.findOrderById(id).then(order => setOrder(order))
  }
  const deleteOrder = (id) =>
      orderService.deleteOrder(id).then(() => history.back())

  const createOrder = (userId, dishId, order) =>
      orderService.createOrder(userId, dishId, order).then(() => history.back())

  const updateOrder = (id, newOrder) =>
      orderService.updateOrder(id, newOrder).then(() => history.back())

  return (
      <div>
        <h2>Order Editor</h2>
        <label>Id</label>
        <input value={order.id} placeholder="Auto Generated" className="form-control"/><br/>

        <label>Dish ID</label>
        <input onChange={(e) => dishId = (e.target.value)}
               value={order.dish.id } className="form-control" placeholder={"Number ex: 1"}/>

        <label>User ID</label>
        <input onChange={(e) => userId = (e.target.value)}
               value={order.user.id} className="form-control"  placeholder={"Number ex: 1"}/>

        <label>Date</label>
        <input onChange={(e) =>
            (order => ({...order, orderDate: e.target.value}))}
               value={order.orderDate} className="form-control" placeholder={"Date ex: YYYY-MM-DD"}/>
        <br/>

        <button onClick={() => {history.back()}} className="btn btn-warning">Cancel</button>
        <button onClick={() => deleteOrder(order.id)} className="btn btn-danger">Delete</button>
        <button onClick={() => updateOrder(order.id, order)} className="btn btn-primary">Save</button>
        <button onClick={() => createOrder(userId, dishId, order)} className="btn btn-success">Create</button>


        <br/>
        <Link to={checkUserLink()}>
          User Information
        </Link>
        <br/>
        <Link to={checkDishLink()}>
          Dish Information
        </Link>

      </div>
  )
}

export default OrderFormEditor