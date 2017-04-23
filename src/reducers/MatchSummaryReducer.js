import { LOAD_MATCH_SUMMARY, LOAD_MATCH_SUMMARY_SUCCESS, LOAD_MATCH_SUMMARY_FAILURE} from '../actions/MatchAction'

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  console.log('type ===', action, state);
  switch (action.type) {
    case LOAD_MATCH_SUMMARY:
      return {
        ...state,
        loading: true,
      };
    case LOAD_MATCH_SUMMARY_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        matchSummary: action.result,
      };
    case LOAD_MATCH_SUMMARY_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}
