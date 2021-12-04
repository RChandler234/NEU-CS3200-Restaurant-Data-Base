const {Link, useParams} = window.ReactRouterDOM;
import ingredientService from "./ingredient-service"
const { useState, useEffect } = React;

const IngredientIngredientAmounts = () => {
  const {ingredientId} = useParams()
  const [ingredientAmounts, setIngredientAmounts] = useState([])
  useEffect(() => {
    findIngredientIngredientAmounts(ingredientId)
  }, [])


  const findIngredientIngredientAmounts = (ingredientId) =>
      ingredientService.ingredientIngredientAmounts(ingredientId)
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
                    Ingredient ID: {ingredientAmount.ingredient.id},
                    Dish ID: {ingredientAmount.dish.id}
                  </Link>
                </li>)
          }

        </ul>
      </div>
  )
}

export default IngredientIngredientAmounts;
