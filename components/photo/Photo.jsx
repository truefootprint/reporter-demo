import { useState, useRef } from 'react';
import css from "./styles.scss";

const Photo = ({ placeholder }) => {
  const [path, setPath] = useState();
  const [text, setText] = useState();

  const fileInput = useRef();

  const handleChange = (event) => {
    const file = event.target.files[0];

    setPath(URL.createObjectURL(file));
    setText(new Date().toLocaleString());
  };

  if (path) {
    return (
      <div className={css.photo}>
        <img src={path} />
        <span>{text}</span>
      </div>
    );
  } else {
    return (
      <div className={css.photo}>
        <button className={css.call_to_action} onClick={() => fileInput.current.click()}>
          {placeholder}
        </button>

        <input ref={fileInput}
               type="file"
               accept="image/*;capture=camera"
               onChange={handleChange} />
      </div>
    );
  }
};

export default Photo;
