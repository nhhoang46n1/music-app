import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getArtistAsync } from "../../store/artists/action";
import "./inputSearch.css";
function InputSearch() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getArtistAsync(inputValue));
    navigate("/dashboard");
  }

  return (
    <form
      className="form__group field"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <input
        type="input"
        className="form__field"
        placeholder="Artist"
        name="name"
        id="name"
        required
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label htmlFor="name" className="form__label ">
        Your Favorite Artist
      </label>
    </form>
  );
}

export default InputSearch;
