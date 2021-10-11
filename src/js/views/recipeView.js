import view from './View.js'
import icons from 'url:../../img/icons.svg'
class RecipeView extends view{
    _parentElement = document.querySelector('.showme');
    
addHandlerUrlId(handler){
    ['hashchange', 'load'].forEach(ev => {
        window.addEventListener(ev, handler)
    })
}

    constructor(){
        super()
        this._addHandlerHideRecipe()
    }

    _addHandlerHideRecipe(){
        this._parentElement.addEventListener('click', (e)=> {
            // e.preventDefault() will stop the <a> to get the video
            
            const parent = e.target.parentElement;
            const prevEl = parent.previousSibling.previousSibling
            if(e.target.classList.contains('btn--close-modal')){
                
                parent.classList.toggle('hidden');
                prevEl.classList.toggle('hidden');
            }
        })
        
    }

    _generateMarkup(){
        return `<div class="overlay"></div>
                    <div class="show modal">
                        <button class="btn--close-modal">&times;</button>
                        <div class="meal__content">
                            <h2 class="show__name">${this._data.title}</h2>
                            <h3 class="show__category">${this._data.category}</h3>
                            <p class="show__instructions">${this._data.instructions}</p>
                        <div class="meal__image">
                                <img crossorigin="anonymous" src="${this._data.image}" alt="">
                        </div>
                            <div class="meal__link">
                                <a class="btn" href="${this._data.video}" target="_blank">Watch Video</a>
                            </div>
                        </div>
                    </div>`
    }










    
//     _show = document.querySelector('.show');
//     _overlay = document.querySelector('.overlay');
//     _btnClose = document.querySelector('.btn--close-modal')
//     _btnOpen = document.querySelectorAll('.btn--open-modal')

//     constructor(){
//         // super()
//         this._addHandlerShowModal();
//         this._addHandlerHideModal();
//     }

//     _addHandlerShowModal(){
        
//         this._btnOpen.forEach(btn => {
//             btn.addEventListener('click', (e)=> {
//                 e.preventDefault();
//                 console.log(e.target);
//             this._show.classList.toggle('hidden');
//             this._overlay.classList.toggle('hidden');
//         })
//         })
//     }
    
//     _addHandlerHideModal(){
//         this._btnClose.addEventListener('click', ()=> {
//             this._show.classList.toggle('hidden');
//             this._overlay.classList.toggle('hidden');
//         })
//         this._overlay.addEventListener('click', ()=> {
//             this._show.classList.toggle('hidden');
//             this._overlay.classList.toggle('hidden');
//         })
//     }
}
export default new RecipeView();