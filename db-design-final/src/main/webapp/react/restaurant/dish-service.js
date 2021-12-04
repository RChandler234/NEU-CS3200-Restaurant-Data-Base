// TODO: declare URL where server listens for HTTP requests
const DISHES_URL = "http://localhost:8080/api/dishes"

// TODO: retrieve all dishes from the server
export const findAllDishes = () =>
    fetch(`${DISHES_URL}`).then(response => response.json())

// TODO: retrieve a single Dish by their ID
export const findDishById = (id) =>
    fetch(`${DISHES_URL}/${id}`).then(response => response.json())

// TODO: delete a Dish by their ID
export const deleteDish = (id) =>
    fetch(`${DISHES_URL}/${id}`, {
      method: "DELETE"
    })

// TODO: create a new Dish
export const createDish = (dish) =>
    fetch(`${DISHES_URL}`, {
      method: 'POST',
      body: JSON.stringify(dish),
      headers: {'content-type': 'application/json'}}).then(response => response.json())

// TODO: update a dish by their ID
export const updateDish = (id, dish) =>
    fetch(`${DISHES_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dish),
      headers: {'content-type': 'application/json'}}).then(response => response.json())

// TODO: find all orders for a dish
export const dishOrders = (id) =>
    fetch(`${DISHES_URL}/orders/dishes/${id}`).then(response => response.json())

// TODO: find all ingredient amounts for a dish
export const dishIngredientAmounts = (id) =>
    fetch(`${DISHES_URL}/ingredientAmount/dishes/${id}`).then(response => response.json())

// TODO: export all functions as the API to this service
export default {
  findAllDishes,
  findDishById,
  deleteDish,
  createDish,
  updateDish,
  dishOrders,
  dishIngredientAmounts
}