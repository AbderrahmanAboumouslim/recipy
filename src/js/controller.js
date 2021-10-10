import *as model from './model.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import recipeView from './views/recipeView.js';

const controlSearch = async ()=> {
    try{
        resultView.renderSpinner()
        const query = searchView.getQuery();
        if(!query) return;
        console.log(query);
        
        await model.searchResult(query);

        resultView.render(model.state.search.results)
        
    }catch(err){
        console.error(err);
        resultView.renderError();
    }
}


const controlShowRecipe = async (mealItem)=> {
    try{
        await model.showRecipe(mealItem)
        // console.log(mealItem);

        recipeView.render(model.state.recipe)


    }catch(err){
        console.error(err);
    }
}




   



const init = ()=> {
    searchView.addHandlerSearch(controlSearch)
    resultView.addHandlerShowRecipe(controlShowRecipe)
}

init();