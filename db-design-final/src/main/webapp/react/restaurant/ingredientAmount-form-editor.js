import ingredientAmountService from "./ingredientAmount-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;


const IngredientAmountFormEditor = () => {
  const {id} = useParams()
  let dishId = useState({})
  let ingredientId = useState({})
  const [ingredientAmount, setIngredientAmount] = useState({dish:{id:null}, ingredient:{id:null}})

  useEffect(() => {
    if(id !== "new") {
      findIngredientAmountById(id)
      ingredientAmount.dish.id = 123;
      ingredientAmount.ingredient.id = 123;
    }
  }, []);

  const checkDishLink = () => {
    let path;
    ingredientAmount.dish.id === null ?  path = "/dishes"
        : path = "/dishes/" + ingredientAmount.dish.id;
    return path;
  }

  const checkIngredLink = () => {
    let path;
    ingredientAmount.ingredient.id === null ?  path = "/ingredients"
        : path = "/ingredients/" + ingredientAmount.ingredient.id;
    return path;
  }
  const findIngredientAmountById = (id) => {
    ingredientAmountService.findIngredientAmountById(id)
    .then(ingredientAmount => setIngredientAmount(ingredientAmount))
  }
  const deleteIngredientAmount = (id) =>
      ingredientAmountService.deleteIngredientAmount(id)
      .then(() => history.back())

  const createIngredientAmount = (dishId, ingredientId, ingredientAmount) =>
      ingredientAmountService.createIngredientAmount(dishId, ingredientId, ingredientAmount)
      .then(() => history.back())

  const updateIngredientAmount = (id, newIngredientAmount) =>
      ingredientAmountService.updateIngredientAmount(id, newIngredientAmount)
      .then(() => history.back())


  return (
      <div>
        <h2>Ingredient Amount Editor</h2>
        <label>Id</label>
        <input value={ingredientAmount.id} placeholder="Auto Generated" className="form-control"/><br/>
        <label>Dish ID</label>
        <input onChange={(e) => dishId = (e.target.value)}
               value={ingredientAmount.dish.id} className="form-control" placeholder="Number ex: 1"/>
        <label>Ingredient ID</label>
        <input onChange={(e) => ingredientId = (e.target.value)}
               value={ingredientAmount.ingredient.id} className="form-control" placeholder="Number ex: 1"/>

        <br/>

        <button onClick={() => {history.back()}} className="btn btn-warning">Cancel</button>
        <button onClick={() => deleteIngredientAmount(ingredientAmount.id)} className="btn btn-danger">Delete</button>
        <button onClick={() => updateIngredientAmount(ingredientAmount.id, ingredientAmount)} className="btn btn-primary">Save</button>
        <button onClick={() => createIngredientAmount(dishId, ingredientId, ingredientAmount)} className="btn btn-success">Create</button>
        <br/>
        <Link to={checkIngredLink()}>
          Ingredient Information
        </Link>
        <br/>
        <Link to={checkDishLink()}>
          Dish Information
        </Link>

      </div>
  )
}

export default IngredientAmountFormEditor