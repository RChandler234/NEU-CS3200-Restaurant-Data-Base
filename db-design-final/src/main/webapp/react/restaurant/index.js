import UserList from "./user-lists";
import UserOrder from "./user-orders";
import DishOrder from "./dish-orders";
import DishIngredientAmounts from "./dish-ingredientAmounts";
import IngredientIngredientAmounts from "./ingredient-ingredientAmounts";

import UserFormEditor from "./user-form-editor";
import IngredientList from "./ingredient-lists";
import IngredientFormEditor from "./ingredient-form-editor";
import IngredientAmountList from "./ingredientAmount-lists";
import IngredientAmountFormEditor from "./ingredientAmount-form-editor";

import OrderList from "./order-lists";
import OrderFormEditor from "./order-form-editor";
import DishList from "./dish-lists";
import DishFormEditor from "./dish-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
  return (
      <div className="container-fluid">
        <HashRouter>
          <Route path={["/users","/"]} exact={true}>
            <UserList/>
          </Route>
          <Route path="/users/:id" exact={true}>
            <UserFormEditor/>
          </Route>
          <Route path={["/dishes","/"]} exact={true}>
            <DishList/>
          </Route>
          <Route path="/dishes/:id" exact={true}>
            <DishFormEditor/>
          </Route>
          <Route path={["/ingredients","/"]} exact={true}>
            <IngredientList/>
          </Route>
          <Route path="/ingredients/:id" exact={true}>
            <IngredientFormEditor/>
          </Route>
          <Route path={["/ingredientAmount","/"]} exact={true}>
            <IngredientAmountList/>
          </Route>
          <Route path="/ingredientAmount/:id" exact={true}>
            <IngredientAmountFormEditor/>
          </Route>
          <Route path={["/orders", "/"]} exact={true}>
            <OrderList/>
          </Route>
          <Route path="/orders/:id" exact={true}>
            <OrderFormEditor/>
          </Route>
          <Route path="/users/orders/users/:userId" exact={true}>
            <UserOrder/>
          </Route>
          <Route path="/dishes/orders/dishes/:dishId" exact={true}>
            <DishOrder/>
          </Route>
          <Route path="/dishes/ingredientAmount/dishes/:dishId" exact={true}>
            <DishIngredientAmounts/>
          </Route>
          <Route path="/ingredients/ingredientAmount/ingredients/:ingredientId" exact={true}>
            <IngredientIngredientAmounts/>
          </Route>
        </HashRouter>
      </div>
  );
}

export default App;