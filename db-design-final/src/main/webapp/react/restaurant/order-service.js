// TODO: declare URL where server listens for HTTP requests
const ORDERS_URL = "http://localhost:8080/api/orders"
const USER_URL = "http://localhost:8080/api/users"


// TODO: retrieve all orders from the server
export const findAllOrders = () =>
    fetch(`${ORDERS_URL}`)
    .then(response => response.json())

// TODO: retrieve a single order by their ID
export const findOrderById = (id) =>
    fetch(`${ORDERS_URL}/${id}`)
    .then(response => response.json())


// TODO: delete a order by their ID
export const deleteOrder = (id) =>
    fetch(`${ORDERS_URL}/${id}`, {
      method: "DELETE"
    })


// TODO: create a new order
export const createOrder = (userId, dishId, order) =>
    fetch(`${ORDERS_URL}/${userId}/${dishId}`, {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: update a order by their ID
export const updateOrder = (id, order) =>
    fetch(`${ORDERS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(order),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// TODO: retrieve all orders from the server
export const findAllOrdersByUser = (id) =>
    fetch(`${USER_URL}/orders/users/${id}`)
    .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
  findAllOrders, findOrderById, deleteOrder, createOrder, updateOrder, findAllOrdersByUser
}