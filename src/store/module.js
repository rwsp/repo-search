/**
 *
 * isLoading - is the app/api search currently processing?
 *
 */
export const isLoading = state => state.submitted && !state.error && !state.success;