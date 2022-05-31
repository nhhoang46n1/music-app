import { GET_TOP_TRACK } from "./action";

const initialState = {
  topTrack: [],
};

export default function TrackReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_TRACK:
      return {
        ...state,
        topTrack: action.payload.data,
      };
    default:
      return state;
  }
}
