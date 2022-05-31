import trackApi from "../../api/trackApi";

export const GET_TOP_TRACK = "GET_TOP_TRACK";

export function getTopTrackAsync(artistId) {
  return async (dispatch) => {
    try {
      const res = await trackApi.getTopTrack(artistId);
      dispatch({
        type: GET_TOP_TRACK,
        payload: {
          data: res.data,
        },
      });
    } catch (error) {
      return error.message;
    }
  };
}
