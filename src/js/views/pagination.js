import icons from "url:../../img/icons.svg";
import view from "./View";

class Pagination extends view {
  _parentElement = document.querySelector(".pagination");

  addHandlerPagination(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--inline");
      const attributePage = +btn.dataset.page;
      handler(attributePage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(this._data.results.length / this._data.res_page);
    // const curPage = this._data.page;

    // ---------------method 2------------------------------
    ////
    const arr = Array.from({ length: numPages });
    const createPagination = arr.map((_, index) => {
      return `<button class="btn--inline pagination__btn--next" data-page=${
        index + 1
      }>${index + 1}</button>`;
    });
    return createPagination;
    /////

    // ---------------method 1------------------------------
    // // first page and still other(s) page(s)
    // if(curPage === 1 && numPages > curPage){
    //     return `<button data-page="${curPage + 1}" class="btn--inline pagination__btn--next">
    //                 <span>Page ${curPage + 1}</span>
    //                 <svg class="search__icon">
    //                     <use href="${icons}#icon-arrow-right"></use>
    //                 </svg>
    //             </button>`
    // }

    // // last page
    // if(curPage === numPages && numPages > 1){
    //     return `<button data-page="${curPage - 1}" class="btn--inline pagination__btn--prev">
    //                 <svg class="search__icon">
    //                     <use href="${icons}#icon-arrow-left"></use>
    //                 </svg>
    //                 <span>Page ${curPage -1}</span>
    //             </button>`
    // }

    // // middle pages (not first page and not last page)
    // if(numPages > curPage){
    //     return `<button data-page="${curPage - 1}" class="btn--inline pagination__btn--prev">
    //                 <svg class="search__icon">
    //                     <use href="${icons}#icon-arrow-left"></use>
    //                 </svg>
    //                 <span>Page ${curPage - 1}</span>
    //             </button>
    //             <button data-page="${curPage + 1}" class="btn--inline pagination__btn--next">
    //                 <span>Page ${curPage + 1}</span>
    //                 <svg class="search__icon">
    //                     <use href="${icons}#icon-arrow-right"></use>
    //                 </svg>
    //             </button>`
    // }

    // return ''
  }
}
export default new Pagination();
