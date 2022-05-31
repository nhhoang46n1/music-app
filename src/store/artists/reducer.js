import { GET_ARTIST } from "./action";

const initState = {
  artist: [],
};

function ArtistReducer(state = initState, action) {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload.data,
      };

    default:
      return state;
  }
}

export default ArtistReducer;
