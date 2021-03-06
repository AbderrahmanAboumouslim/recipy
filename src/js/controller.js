import *as model from './model.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import recipeView from './views/recipeView.js';
import pagination from './views/pagination.js';
import bookmarkView from './views/bookmarkView.js';

const controlSearch = async ()=> {
    try{
        resultView.renderSpinner()
        const query = searchView.getQuery();
        if(!query || query === '') return;
        await model.searchResult(query);

        
        // resultView.render(model.state.search.results)
        resultView.render(model.resultPage())
        pagination.render(model.state.search)
        window.location.hash = '';
    }catch(err){
        console.error(err);
        resultView.renderError();
    }
}

const controlPagination = (attributePage)=> {
    resultView.render(model.resultPage(attributePage))
    pagination.render(model.state.search)
}

const controlShowRecipe = async (id)=> {
    try{
        await model.showRecipe(id)
        // console.log(mealItem);
        recipeView.render(model.state.recipe)
        window.history.pushState(null, '', `#${id}`)

    }catch(err){
        console.error(err);
    }
}

const controlUrlId = async ()=> {
    try{   
        let id = window.location.hash.slice(1)
        await model.showRecipe(id)
        recipeView.render(model.state.recipe)
        

    }catch(err){
        console.error(err);
    }
}

const controlBookmark = ()=> {
    if(!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe)
    else model.removeBookmark(model.state.recipe.id)
    recipeView.render(model.state.recipe)
    bookmarkView.render(model.state.bookmarks)
}
//
const controlLoadLocalStorageBookmarks = ()=> {
    bookmarkView.render(model.state.bookmarks)
    // console.log(model.state.bookmarks);
}


const init = ()=> {
    searchView.addHandlerSearch(controlSearch)
    resultView.addHandlerShowRecipe(controlShowRecipe)
    pagination.addHandlerPagination(controlPagination)
    recipeView.addHandlerUrlId(controlUrlId)
    recipeView.addHandlerBookmark(controlBookmark)
    bookmarkView.addHandlerLoadStorage(controlLoadLocalStorageBookmarks)
}

init();