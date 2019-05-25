import { useState } from 'react';
import Spinner from "../spinner";
import css from "./styles.scss";

const Form = ({ setPage, content }) => {
  const [photo, setPhoto] = useState({});
  const [photoText, setPhotoText] = useState({});

  const photoChange = (id) => {
    return (event) => {
      const file = event.target.files[0];
      const src = URL.createObjectURL(file);
      const timestamp = new Date().toLocaleString();

      setPhoto({ ...photo, [id]: src });
      setPhotoText({ ...photoText, [id]: timestamp });
    };
  };

  const section1 = content.section1;
  const section2 = content.section2;
  const section3 = content.section3;
  const section4 = content.section4;

  return <>
    <Spinner />

    <div className={css.form}>
      <h3>{content.title}</h3>

      <a className={css.back} onClick={() => setPage("overview")}>&lt; {content.back}</a>
      <p className={css.intro}>{content.intro}</p>

      <div className={`${css.section} ${css.first}`}>
        <h5>{section1.title}</h5>

        <div className={css.field}>
          <span className={css.question}>{section1.question1}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section1.placeholder1} />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section1.question2}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section1.placeholder2} />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section1.question3}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section1.placeholder3} />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section1.question4}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section1.placeholder4} />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section1.question5}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section1.placeholder5} />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section1.question6}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-1" />{section1.option6a}</label>
            <label className={css.radio}><input type="radio" name="group-1" />{section1.option6b}</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section1.question7}</span>

          <div className={css.answer}>
            {photo.a && <div className={css.photo}><img src={photo.a} /><span>{photoText.a}</span></div>}
            {!photo.a ? <input type="file" accept="image/*;capture=camera" onChange={photoChange("a")} /> : null}
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section1.question8}</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div>
      </div>

      <div className={`${css.section} ${css.second}`}>
        <h5>{section2.title}</h5>

        <div className={css.field}>
          <span className={css.question}>{section2.question1}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-2" />{section2.option1a}</label>
            <label className={css.radio}><input type="radio" name="group-2" />{section2.option1b}</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section2.question2}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-3" />{section2.option2a}</label>
            <label className={css.radio}><input type="radio" name="group-3" />{section2.option2b}</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section2.question3}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-4" />{section2.option3a}</label>
            <label className={css.radio}><input type="radio" name="group-4" />{section2.option3b}</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section2.question4}</span>

          <div className={css.answer}>
            <input type="date" />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section2.question5}</span>

          <div className={css.answer}>
            {photo.b && <div className={css.photo}><img src={photo.b} /><span>{photoText.b}</span></div>}
            {!photo.b ? <input type="file" accept="image/*;capture=camera" onChange={photoChange("b")} /> : null}
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section2.question6}</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div>
      </div>

      <div className={`${css.section} ${css.third}`}>
        <h5>{section3.title}</h5>

        <div className={css.field}>
          <span className={css.question}>{section3.question1}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-5" />{section3.option1a}</label>
            <label className={css.radio}><input type="radio" name="group-5" />{section3.option1b}</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section3.question2}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-6" />{section3.option2a}</label>
            <label className={css.radio}><input type="radio" name="group-6" />{section3.option2b}</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section3.question3}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-7" />{section3.option3a}</label>
            <label className={css.radio}><input type="radio" name="group-7" />{section3.option3b}</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section3.question4}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-8" />{section3.option4a}</label>
            <label className={css.radio}><input type="radio" name="group-8" />{section3.option4b}</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section3.question5}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-9" />{section3.option5a}</label>
            <label className={css.radio}><input type="radio" name="group-9" />{section3.option5b}</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section3.question6}</span>

          <div className={css.answer}>
            {photo.c && <div className={css.photo}><img src={photo.c} /><span>{photoText.c}</span></div>}
            {!photo.c ? <input type="file" accept="image/*;capture=camera" onChange={photoChange("c")} /> : null}
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section3.question7}</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div>
      </div>

      <div className={`${css.section} ${css.fourth}`}>
        <h5>{section4.title}</h5>

        <div className={css.field}>
          <span className={css.question}>{section4.question1}</span>

          <div className={`${css.answer} ${css.project_progress}`}>
            <label className={css.radio}><input type="radio" name="group-10" />{section4.option1a}</label>
            <label className={css.radio}><input type="radio" name="group-10" />{section4.option1b}</label>
            <label className={css.radio}><input type="radio" name="group-10" />{section4.option1c}</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section4.question2}</span>

          <div className={css.answer}>
            {photo.d && <div className={css.photo}><img src={photo.d} /><span>{photoText.d}</span></div>}
            {!photo.d ? <input type="file" accept="image/*;capture=camera" onChange={photoChange("d")} /> : null}
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>{section4.question3}</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div>
      </div>

      <div className={css.center}>
        <button className={css.call_to_action} onClick={() => setPage("thanks")}>
          {content.call_to_action}
        </button>
      </div>
    </div>
  </>;
}

export default Form;
