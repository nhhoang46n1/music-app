import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import ArtistReducer from "../store/artists/reducer";
import TrackReducer from "../store/track/reducer";

const rootReducer = combineReducers({
  Artists: ArtistReducer,
  Tracks: TrackReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
