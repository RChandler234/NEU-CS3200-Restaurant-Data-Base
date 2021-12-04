const {Link, useParams} = window.ReactRouterDOM;
import userService from "./user-service"
const { useState, useEffect } = React;

const UserOrders = () => {
  const {userId} = useParams()
  console.log(userId)
  const [orders, setOrders] = useState([])
  useEffect(() => {
    findUserOrders(userId)
  }, [])

  const findUserOrders = (userId) =>
      userService.userOrders(userId).then(orders => setOrders(orders))
  return(
      <div>
        <h2>Order List</h2>
        <ul className="list-group">
          {
            orders.map(order =>
                <li key={order.id}>
                  <Link to={`/orders/${order.id}`}>
                    Order ID: {order.id},
                    Order Date: {order.orderDate},
                    Order User ID: {order.user.id},
                    Order Dish ID: {order.dish.id}
                  </Link>
                </li>)
          }

        </ul>
      </div>
  )
}

export default UserOrders;