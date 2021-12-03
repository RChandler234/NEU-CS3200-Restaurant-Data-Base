import dishService from "./dish-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;
const DishFormEditor = () => {
  const {id} = useParams()
  const [dish, setDish] = useState({})
  useEffect(() => {
    if(id !== "new") {
      findDishById(id)
    }
  }, []);

  const findDishById = (id) => {
    dishService.findDishById(id).then(dish => setDish(dish))
  }
  const deleteDish = (id) =>
      dishService.deleteDish(id).then(() => history.back())

  const createDish = (dish) =>
      dishService.createDish(dish).then(() => history.back())

  const updateDish = (id, newDish) =>
      dishService.updateDish(id, newDish.then(() => history.back())
      )

  return (
      <div>
        <h2>Dish Editor</h2>
        <label>Id</label>
        <input value={dish.id} placeholder="Auto Generated" className="form-control"/><br/>

        <label>Name</label>
        <input onChange={(e) =>
            setDish(dish => ({...dish, name: e.target.value}))}
               value={dish.name} className="form-control"/>

        <label htmlFor={"enumType"}>Dish Type</label>
        <select name="enumType" id={"enumType"} className="form-control"
                onChange={(e) =>
                    setDish(
                        dish => ({...dish, type: e.target.value}))}
                value={dish.type}>
          <option value="APPETIZER">Appetizer</option>
          <option value="ENTREE">Entree</option>
          <option value="DESSERT">Dessert</option>
          <option value="DRINK">Drink</option>
        </select>

        <label>Calories</label>
        <input onChange={(e) =>
            setDish(bakedGood => ({...dish, calories: e.target.value}))}
               value={dish.calories} className="form-control"/>

        <label>Price</label>
        <input onChange={(e) =>
            setDish(dish =>({...dish, price: e.target.value}))}
               value={dish.price} className="form-control"/>

        <button onClick={() => {history.back()}} className="btn btn-warning">Cancel</button>
        <button onClick={() => deleteDish(dish.id)} className="btn btn-danger">Delete</button>
        <button onClick={() => updateDish(dish.id, dish)} className="btn btn-primary">Save</button>
        <button onClick={() => createDish(dish)} className="btn btn-success">Create</button>

        <br/>
        <Link to={`orders/dishes/${dish.id}`}>
          Order Info
        </Link>
        <br/>
        <Link to={`ingredientAmounts/dishes/${dish.id}`}>
          Ingredient Amount Info
        </Link>

      </div>
  )
}

export default DishFormEditor