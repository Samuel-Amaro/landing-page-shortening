import React, { useState } from "react";
import "./Form.css";
import shortenUrl from "../api/api.js";

export default function Form(props) {
  const [formIsValid, setFormIsValid] = useState(true);
  const [valueInput, setValueInput] = useState("");
  let regexUrl = new RegExp(
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
  );

  function handleSubmitForm(event) {
    event.preventDefault();
    if (valueInput === "") {
      setFormIsValid(false);
    }

    if (valueInput !== "" && valueInput.length > 0) {
        if(regexUrl.test(valueInput)) {
            setFormIsValid(true);
            shortenUrl(valueInput, props.setUrlsShorteneds);
        }
    }
  }

  function handleChangeInput(event) {
    setValueInput(event.target.value);
  }

  return (
    <form
      action=""
      name="form"
      className={formIsValid === false ? "Form Form_Invalid" : "Form"}
      aria-label="Form from shorten a link here"
      onSubmit={(event) => handleSubmitForm(event)}
    >
      <div className="form__Group">
        <input
          type="url"
          placeholder="Shorten a link here..."
          className={
            formIsValid === false
              ? "form__Input form__Input_Invalid"
              : "form__Input"
          }
          aria-label="Shorten a link here... enter a url formatted like: 'urlscheme://restofurl"
          title="Please enter a url formatted like: 'urlscheme://restofurl'"
          value={valueInput}
          onChange={(event) => handleChangeInput(event)}
        />
        {/*se o input estiver vazio add o alert*/}
        {formIsValid ? (
          ""
        ) : (
          <span className="form__Label-Warning" role="alert">
            Please add a link
          </span>
        )}
        <button
          type="submit"
          className="form__btn"
          title="Submite url to shorten"
        >
          Shorten It!
        </button>
      </div>
    </form>
  );
}
