/**
 *
 * isLoading - is the app/api search currently processing?
 *
 */
import {MAX_RESULTS_PER_SEARCH, RESULTS_PER_PAGE} from "../constants";

export const isLoading = state => state.submitted && !state.error && !state.success;

/**
 *
 * toNumberOfPages - number of pages of search results available from github api
 *
 */
export const toNumberOfPages = numberOfExistentResults => {
  const quantity = numberOfExistentResults <= MAX_RESULTS_PER_SEARCH
    ? numberOfExistentResults
    : MAX_RESULTS_PER_SEARCH;

  const subtotal = Math.floor( quantity / RESULTS_PER_PAGE );
  const addRemainder = quantity % RESULTS_PER_PAGE > 0 ? 1 : 0;

  return subtotal + addRemainder;
};
