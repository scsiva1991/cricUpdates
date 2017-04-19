import { LOAD_CURRENT_MATCHES, LOAD_CURRENT_MATCHES_SUCCESS, LOAD_CURRENT_MATCHES_FAILURE} from '../actions/MatchAction'

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  console.log('type ===', action, state);
  switch (action.type) {
    case LOAD_CURRENT_MATCHES:
      return {
        ...state,
        loading: true,
      };
    case LOAD_CURRENT_MATCHES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        list: action.result,
      };
    case LOAD_CURRENT_MATCHES_FAILURE:
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
