import view from './View.js'

class ResultView extends view {
    _parentElement = document.querySelector('.meal');
    _errorMessage = 'We could not find a recipe that match your search! please try another recipe :) '
    
    addHandlerShowRecipe(handler){
        this._parentElement.addEventListener('click', (e)=> {
            e.preventDefault()
            if(e.target.classList.contains('btn--open-modal')){
                let mealItemPath = e.target.parentElement.parentElement;
                const id = +mealItemPath.dataset.id;
                handler(id)
            }
            
        })
        
    }

    _generateMarkup(){
        return this._data.map(meal => {
            return `<li class="meal__item" data-id="${meal.id}">
                        <div class="meal__image">
                            <img crossorigin="anonymous" src="${meal.image}" alt="">
                        </div>
                        <div class="meal__info">
                            <h3>${meal.title}</h3>
                            <p class="meal__btn btn btn--open-modal">Get recipe</p>
                        </div>
                    </li>`
        }).join('')
    }

}
export default new ResultView();