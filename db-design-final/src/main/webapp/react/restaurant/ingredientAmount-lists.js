const {Link, useHistory} = window.ReactRouterDOM;
import ingredientAmountService from "./ingredientAmount-service"
const { useState, useEffect } = React;

const IngredientAmountList = () => {
  const history = useHistory()
  const [ingredientAmounts, setIngredientAmounts] = useState([])
  useEffect(() => {
    findAllIngredientAmounts()
  }, [])
  const findAllIngredientAmounts = () =>
      ingredientAmountService.findAllIngredientAmounts()
      .then(ingredientAmounts => {setIngredientAmounts(ingredientAmounts); console.log(ingredientAmounts)})
  return(
      <div>
        <h2>Ingredient Amount List</h2>
        <button onClick={() => history.push("/ingredientAmount/new")} className="btn btn-primary">
          Add Ingredient Amount
        </button>
        <ul className="list-group">
          {
            ingredientAmounts.map(ingredientAmount =>
                <li key={ingredientAmount.id}>
                  <Link to={`/ingredientAmount/${ingredientAmount.id}`}>
                    ID:  {ingredientAmount.id},
                    Dish: {ingredientAmount.dish.name},

                    Ingredient: {ingredientAmount.ingredient.name},
                  </Link>
                </li>)
          }
        </ul>
      </div>
  )
}

export default IngredientAmountList;