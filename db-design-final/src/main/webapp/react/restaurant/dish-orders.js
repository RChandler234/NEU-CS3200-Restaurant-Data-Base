const {Link, useParams} = window.ReactRouterDOM;
import dishService from "./dish-service"
const { useState, useEffect } = React;

const DishOrders = () => {
  const {dishId} = useParams()
  const [orders, setOrders] = useState([])
  useEffect(() => {
    findDishOrders(dishId)
  }, [])

  const findDishOrders = (dishId) =>
      dishService.dishOrders(dishId).then(orders => setOrders(orders))
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

export default DishOrders;