import artistApi from "../../api/artistApi";

export const GET_ARTIST = "GET_ARTIST";

export function getArtistAsync(inputValue) {
  return async (dispatch) => {
    try {
      const res = await artistApi.getAll(inputValue);
      dispatch({
        type: GET_ARTIST,
        payload: {
          data: res.data,
          searchValue: inputValue,
        },
      });
    } catch (error) {
      return error.message;
    }
  };
}
