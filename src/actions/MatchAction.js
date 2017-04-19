export const LOAD_CURRENT_MATCHES = 'LOAD_CURRENT_MATCHES';
export const LOAD_CURRENT_MATCHES_SUCCESS = 'LOAD_CURRENT_MATCHES_SUCCESS';
export const LOAD_CURRENT_MATCHES_FAILURE = 'LOAD_CURRENT_MATCHES_FAILURE';

console.log('**** Action ****');
export const getCurrentMatchList = () => {
  return {
    types: [LOAD_CURRENT_MATCHES, LOAD_CURRENT_MATCHES_SUCCESS, LOAD_CURRENT_MATCHES_FAILURE],
    promise: client => client.get('/matches'),
  };
};
