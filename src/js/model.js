export const state = {
    search: {
        query: '',
        results: [],
    },
    recipe: {},



}

export const searchResult = async (query)=> {
    try{
        state.search.query = query;
        // const resp = await fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);
        const resp = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await resp.json();
        console.log(data);

        state.search.results = data.meals.map(meal => {
            return {
                title : meal.strMeal,
                image : meal.strMealThumb,
                id : meal.idMeal,
            }
        })
        // console.log(state.search.results);
    }catch(err) {
        throw err;
    }
}


export const showRecipe = async (mealItem)=> {
    try{
        const resp =await fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem}`)
        const data = await resp.json()
        console.log(data);
        const meal = data.meals[0];

        state.recipe = {
            id : meal.idMeal,
            area : meal.strArea,
            category : meal.strCategory,
            instructions : meal.strInstructions,
            title : meal.strMeal,
            image : meal.strMealThumb,
            sourceUrl : meal.strSource,
            video : meal.strYoutube,
        }
console.log(state.recipe);
    }catch(err){
        throw err;
    }
}

