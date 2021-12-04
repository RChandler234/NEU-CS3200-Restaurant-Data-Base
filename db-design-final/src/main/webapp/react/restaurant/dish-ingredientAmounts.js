const {Link, useParams} = window.ReactRouterDOM;
import dishService from "./dish-service"
const { useState, useEffect } = React;

const DishIngredientAmounts = () => {
  const {dishId} = useParams()
  const [ingredientAmounts, setIngredientAmounts] = useState([])
  useEffect(() => {
    findDishIngredientAmounts(dishId)
  }, [])

  const  findDishIngredientAmounts = (dishId) =>
      dishService.dishIngredientAmounts(dishId)
      .then(ingredientAmounts => setIngredientAmounts(ingredientAmounts))
  return(
      <div>
        <h2>Ingredient Amount List</h2>
        <ul className="list-group">
          {
            ingredientAmounts.map(ingredientAmount =>
                <li key={ingredientAmount.id}>
                  <Link to={`/ingredientAmount/${ingredientAmount.id}`}>
                    Ingredient Amount ID: {ingredientAmount.id},
                    Ingredient Amount Ingredient ID: {ingredientAmount.ingredient.id},
                    Ingredient Amount Dish ID: {ingredientAmount.dish.id}
                  </Link>
                </li>)
          }

        </ul>
      </div>
  )
}

export default DishIngredientAmounts;