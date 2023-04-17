import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { getNameFilm, getTrending } from './api';
const TUI_VISIBLE_PAGES = 5;
const paginationEl = document.querySelector('#pagination');

export function createPagination(totalItems, visiblePages) {
  const options = {
    itemsPerPage: 20,
    totalItems: totalItems,
    visiblePages: visiblePages < 5 ? visiblePages : TUI_VISIBLE_PAGES,
  };

  const pagination = new Pagination(paginationEl, options);

  if (visiblePages > 1) {
    paginationEl.style.display = 'block';
  } else {
    paginationEl.style.display = 'none';
  }

  return pagination;
}
