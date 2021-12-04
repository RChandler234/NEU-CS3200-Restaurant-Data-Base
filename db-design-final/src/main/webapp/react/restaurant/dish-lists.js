const {Link, useHistory} = window.ReactRouterDOM;
import dishService from "./dish-service"
const { useState, useEffect } = React;

const DishList = () => {
  const history = useHistory()
  const [dishes, setDishes] = useState([])
  useEffect(() => {
    findAllDishes()
  }, [])
  const findAllDishes = () =>
      dishService.findAllDishes()
      .then(dishes => setDishes(dishes))
  return(
      <div>
        <h2>Dish List</h2>
        <button onClick={() => history.push("/dishes/new")} className="btn btn-primary">
          Add Dish
        </button>
        <ul className="list-group">
          {
            dishes.map(dish =>
                <li key={dish.id}>
                  <Link to={`/dishes/${dish.id}`}>
                    Dish ID: {dish.id},
                    Dish Name: {dish.name},
                    Dish Type: {dish.type}
                    Dish Calories: {dish.calories},
                    Dish Price: {dish.price}
                  </Link>
                </li>)
          }

        </ul>
      </div>
  )
}

export default DishList;