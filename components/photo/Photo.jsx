import { useState } from 'react';
import css from "./styles.scss";

const Photo = () => {
  const [path, setPath] = useState();
  const [text, setText] = useState();

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
      <input type="file" accept="image/*;capture=camera" onChange={handleChange} />
    );
  }
};

export default Photo;
