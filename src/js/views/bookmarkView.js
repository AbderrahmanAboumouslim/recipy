import view from './View.js'

class BookmarkView extends view {
    _parentElement = document.querySelector('.bookmarks__list');

    addHandlerLoadStorage(handler){
        window.addEventListener('load', handler);
    }

    _generateMarkup(){
        return this._data.map(bookmark => {
                        return `<li class="preview">
                                    <a class="preview__link" href="#${bookmark.id}">
                                    <figure class="preview__fig">
                                        <img crossorigin="anonymous" src="${bookmark.image}" alt="${bookmark.title}" />
                                    </figure>
                                    <div class="preview__data">
                                        <h4 class="preview__title">
                                        ${bookmark.title}
                                        </h4>
                                    </div>
                                    </a>
                                </li>`
        }).join('')
    }
}
export default new BookmarkView();