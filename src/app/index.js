/**
 * Created by matt on 2/19/17.
 */
import $ from 'jquery';
const $main = $('#main');

export const render = (markup) => $main.append(markup());

export const pageInit = (markup) => {
  $(document).ready(() => render(markup));
};