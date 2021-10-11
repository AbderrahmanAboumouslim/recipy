import { RES_PAGE } from "./config.js";

export const state = {
    search: {
        query: '',
        results: [],
        page:1,
        res_page: RES_PAGE,
    },
    recipe: {},
    bookmarks: [],



}

export const searchResult = async (query)=> {
    try{
        state.search.query = query;
        // const resp = await fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
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

        state.search.page = 1;
    }catch(err) {
        throw err;
    }
}


export const showRecipe = async (id)=> {
    try{
        const resp =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
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

// results per page
export const resultPage = (page = state.search.page)=> {
    state.search.page = page;
    const indexStart = (page - 1) * state.search.res_page;
    const indexEnd = page * state.search.res_page;

    return state.search.results.slice(indexStart, indexEnd)
}

//
export const addBookmark = (recipe)=> {
    state.bookmarks.push(recipe);
    if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    console.log(state.recipe);
}

export const removeBookmark = (id)=> {
    const index = state.bookmarks.some(bookmark => bookmark.id === id)
    state.bookmarks.splice(index, 1)
    if(id === state.recipe.id) state.recipe.bookmarked = false;
        console.log(state.recipe);

}
