

Function components + hooks
Separated components (using props)
Event handlers (onClick, onSubmit)
Conditional rendering
Lists and Keys
Form
Routing
GET and POST to JSON-server db.json
Styling
Optimized and clean code without errors or warnings 

User can add and see recipes. For the countries use https://restcountries.com/ API.

full list of all countries endpoint: https://restcountries.com/v3.1/all
[ {-name.common
-flags.png
flags.svg
 - }]

 https://restcountries.com/v2/all?fields=name,flags



 ## excised from AddRecipes

   /* let formData = new FormData();
    formData = newRecipe; */

   /* class newRecipe2 {
    constructor(name, author, country, description, image, ingredients, preparation_time, cooking_time, servings, directions) {
      this.name = name;
      this.author = author;
      this.country = country;
      this.description = description;
      this.image = image;
      this.ingredients = ingredients;
      this.preparation_time = preparation_time;
      this.cooking_time = cooking_time;
      this.servings = servings;
      this.directions = directions;
    }
  } */


 ##  a sample object adapter

  'use strict';

function adapt(item){
    return {
        id:+item.id,
        firstname:item.firstname,
        lastname:item.lastname,
        department:item.department,
        salary:+item.salary //also Number(item.salary)
    }
}

### using Object.assign() :

function adapt(item){
    console.log('adapterV2')
    return Object.assign(item, {
        id:+item.id,
        salary:+item.salary
    });
}
https://www.cookingclassy.com/wp-content/uploads/2021/10/beef-stew-30.jpg

## Problematic characters in URL parameters - workaround example

 ```<Link to="/foo/bar/:id" params={{id: encodeURIComponent('hello/world')}} />```
 
 then use decodeURIComponent (this.props.params.id) from the component being referred.

 excised from AddRecipe:

   const ingredientHandler = (formData) => {
    /* setIngredientsState({ ...ingredientsState, formData });
    console.log(ingredientsState);
    console.log(formData); */
  }