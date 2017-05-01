// Actions to get current matches list
export const LOAD_CURRENT_MATCHES = 'LOAD_CURRENT_MATCHES';
export const LOAD_CURRENT_MATCHES_SUCCESS = 'LOAD_CURRENT_MATCHES_SUCCESS';
export const LOAD_CURRENT_MATCHES_FAILURE = 'LOAD_CURRENT_MATCHES_FAILURE';

//Actions to get match summary of the selected match
export const LOAD_MATCH_SUMMARY = 'LOAD_MATCH_SUMMARY';
export const LOAD_MATCH_SUMMARY_SUCCESS = 'LOAD_MATCH_SUMMARY_SUCCESS';
export const LOAD_MATCH_SUMMARY_FAILURE = 'LOAD_MATCH_SUMMARY_FAILURE';

export const getCurrentMatchList = () => {
  return {
    types: [LOAD_CURRENT_MATCHES, LOAD_CURRENT_MATCHES_SUCCESS, LOAD_CURRENT_MATCHES_FAILURE],
    promise: client => client.get('/matches?'),
  };
};

export const getMatchSummary = (matchId) => {
  return {
    types: [LOAD_MATCH_SUMMARY, LOAD_MATCH_SUMMARY_SUCCESS, LOAD_MATCH_SUMMARY_FAILURE],
    promise : client => client.get('/cricketScore?unique_id='+matchId+'&')
  };
};
