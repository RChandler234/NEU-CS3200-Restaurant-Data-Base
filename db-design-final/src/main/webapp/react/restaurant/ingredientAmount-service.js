// TODO: declare URL where server listens for HTTP requests
const INGREDIENTAMOUNT_URL = "http://localhost:8080/api/ingredientAmount"

// TODO: retrieve all ingredient amounts from the server
export const findAllIngredientAmounts = () =>
    fetch(`${INGREDIENTAMOUNT_URL}`)
    .then(response => response.json())


// TODO: retrieve a single ingredient amount by their ID
export const findIngredientAmountById = (id) =>
    fetch(`${INGREDIENTAMOUNT_URL}/${id}`)
    .then(response => response.json())


// TODO: delete a ingredient amount by their ID
export const deleteIngredientAmount = (id) =>
    fetch(`${INGREDIENTAMOUNT_URL}/${id}`, {
      method: "DELETE"
    })


// TODO: create a new ingredient amount
export const createIngredientAmount = (dishId, ingredientId, ingredeintAmount) =>
    fetch(`${INGREDIENTAMOUNT_URL}/${dishId}/${ingredientId}`, {
      method: 'POST',
      body: JSON.stringify(ingredeintAmount),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: update a ingredient amount by their ID
export const updateIngredientAmount = (id, ingredientAmount) =>
    fetch(`${INGREDIENTAMOUNT_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(ingredientAmount),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
  findAllIngredientAmounts, findIngredientAmountById, deleteIngredientAmount, createIngredientAmount, updateIngredientAmount
}