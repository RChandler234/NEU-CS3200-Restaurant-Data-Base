const {Link, useParams, useHistory} = window.ReactRouterDOM;
import orderService, {findAllOrders} from "./order-service"
const { useState, useEffect } = React;

const OrderList = () => {
  const history = useHistory()
  const {userId} = useParams()
  console.log(userId)
  const [orders, setOrders] = useState([])
  useEffect(() => {
    findAllOrders()
  }, [])
  const findAllOrders = () =>
      orderService.findAllOrders()
      .then(orders => setOrders(orders))
  return(
      <div>
        <h2>Orders List</h2>
        <button onClick={() => history.push("/orders/new")} className="btn btn-primary">
          Add Order
        </button>
        <ul className="list-group">
          {
            orders.map(order =>
                <li key={order.id}>
                  <Link to={`/orders/${order.id}`}>
                    Order ID: {order.id},
                    User ID: {order.user.id},
                    Dish ID: {order.dish.id}
                  </Link>
                </li>)
          }

        </ul>
      </div>
  )
}

export default OrderList;