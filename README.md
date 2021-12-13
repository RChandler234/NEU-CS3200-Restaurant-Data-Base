# CS3200 Database Design Final Project
## Restaurant Database
## Fall 2021 Group 50
### Seungbin (Andy) Jin & Jay Patel 

### Description of Project
For this project, we created a restaurant database with users (customers), dishes, and ingredients. 

### UML Diagram
Our UML Diagram showing our relational database is located in the same folder as this file:
[db_design_final_project_UML.pdf](https://github.com/JayPat73/NEU-CS3200-Restaurant-Data-Base/blob/main/db_design_final_project_UML.pdf)

#### User Model
The user for our database is a user object representing a customer for the restaurant. A user has a first name, last name, username, password, and email
all represented as strings. The user also has a date of birth, as well as a created and updated field which are stored as dates. 

The user can be interpreted as someone who is ordering at or from the restaurant be it an online order or as a rewards member who signed up using their 
personal information.

#### Domain Objects
The first domain object of this database is a dish. A dish has a name represented as a string, a type which is a foreign-key string refering to the DishType
enumeration, calories represented by an int, and a price represented as a float.

The second domain object is an ingredient. Ingredients have a string representing the name of the ingredient along with an int representing the prep time
needed to prep the ingredient for any given dish.

#### Data Relationships
##### User Model to Domain Object Relationship
A user can "order" many dishes and a dish can "be ordered" by many users, representing a many to many relationship between users and dishes. This relationship 
has been reified by the association class called Order, which contains 4 fields: an int representing the id number of the order, a date representing the date
the order occoured, a userId which is an int refering to the id of the user that ordered the dish, and a dishId which is an int refering to the id of the dish
the user ordered.

##### Domain Object to Domain Object Relationship
A dish can "be made of" many ingredients, and an ingredient can "be in" many dishes, representing a many to many relationship between dishes and ingredients.
This relationship has been reified by the association class called IngredientAmount, which contains 3 fields: an int representing the id of the 
ingredientAmount, a dishID which is an int refering to the id of the dish the ingredient is in, and an ingredientID which is an int refering to the id of the
ingredient that is a part of the dish.

#### Enumeration
Our enumeration is the enum/table DishType, which contains four possible values: APPETIZER, ENTREE, DESSERT, and DRINK. The field that is constrained to this 
enumeration is the type variable in the class Dish.

#### Interface Requirements
For the User, Order, Dish, Ingredient Amount, and Ingredient, the interface allows the user to do the CRUD operations, i.e.: create, read, update, and delete 
records. If the user attempts to update the id of any item, or the foreign key (such as the ingredient or dish value in ingredient amount or the user or dish 
values in order), it will not update. Create allows the creation of a new item, which will be saved upon pressing the save button. The user will be sent back to 
their previous page if they select the cancel button. For orders and ingredient amounts, the user must use preexisting ids for the required field, i.e. a valid 
user id when creatign an order or else the user interface will crash attempting to retreive an item that does not exist. For a dish, the drop down menu can be 
used to specify the enum value for the dish type. If the user attempts to create or upadate a user without inputting a username and password, the user will not 
be created or updated as it is a required field.
