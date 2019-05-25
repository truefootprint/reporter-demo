import { useState } from 'react';
import Spinner from "../spinner";
import css from "./styles.scss";

const Form = ({ setPage }) => {
  const [photo, setPhoto] = useState();
  const [photoText, setPhotoText] = useState();

  const photoChange = (event) => {
    const file = event.target.files[0];
    const src = URL.createObjectURL(file);

    setPhoto(src);
    setPhotoText(new Date().toLocaleString());
  };

  return <>
    <Spinner />

    <div className={css.form}>
      <h3>Send an update</h3>

      <a className={css.back} onClick={() => setPage("overview")}>&lt; back</a>

      <p className={css.intro}>
        Please answer the following questions about the progress of the project.
        If you are unsure of an answer, you can leave it blank.
        Please refer to training materials when in doubt.
      </p>

      <div className={`${css.section} ${css.first}`}>
        <h5>Building</h5>

        <div className={css.field}>
          <span className={css.question}>Wall length in metres:</span>
          <div className={css.answer}>
            <input type="text" placeholder="e.g. 5" />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Wall width in metres:</span>
          <div className={css.answer}>
            <input type="text" placeholder="e.g. 5" />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Number of toilets:</span>
          <div className={css.answer}>
            <input type="text" placeholder="e.g. 3" />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Number of washbasins:</span>
          <div className={css.answer}>
            <input type="text" placeholder="e.g. 3" />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Number of rooms:</span>
          <div className={css.answer}>
            <input type="text" placeholder="e.g. 3" />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Electricity works:</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-1" />Yes</label>
            <label className={css.radio}><input type="radio" name="group-1" />No</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Photo:</span>

          <div className={css.answer}>
            {photo && <div className={css.photo}><img src={photo} /><span>{photoText}</span></div>}
            {!photo ? <input type="file" accept="image/*;capture=camera" onChange={photoChange} /> : null}
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Any other comments:</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div>
      </div>

      <div className={`${css.section} ${css.second}`}>
        <h5>Cement</h5>

        <div className={css.field}>
          <span className={css.question}>Floats in water:</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-2" />Yes</label>
            <label className={css.radio}><input type="radio" name="group-2" />No</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Contains lumps:</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-3" />Yes</label>
            <label className={css.radio}><input type="radio" name="group-3" />No</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Strength test:</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-4" />Pass</label>
            <label className={css.radio}><input type="radio" name="group-4" />Fail</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Pack date:</span>

          <div className={css.answer}>
            <input type="date" />
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Photo:</span>

          <div className={css.answer}>
            {photo && <div className={css.photo}><img src={photo} /><span>{photoText}</span></div>}
            {!photo ? <input type="file" accept="image/*;capture=camera" onChange={photoChange} /> : null}
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Any other comments:</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div>
      </div>

      <div className={`${css.section} ${css.third}`}>
        <h5>Bricks</h5>

        <div className={css.field}>
          <span className={css.question}>Shape is uniform:</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-5" />Yes</label>
            <label className={css.radio}><input type="radio" name="group-5" />No</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Hardness test:</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-6" />Pass</label>
            <label className={css.radio}><input type="radio" name="group-6" />Fail</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Sound test:</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-7" />Pass</label>
            <label className={css.radio}><input type="radio" name="group-7" />Fail</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Structure test:</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-8" />Pass</label>
            <label className={css.radio}><input type="radio" name="group-8" />Fail</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Water test:</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-9" />Pass</label>
            <label className={css.radio}><input type="radio" name="group-9" />Fail</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Photo:</span>

          <div className={css.answer}>
            {photo && <div className={css.photo}><img src={photo} /><span>{photoText}</span></div>}
            {!photo ? <input type="file" accept="image/*;capture=camera" onChange={photoChange} /> : null}
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Any other comments:</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div>
      </div>

      <div className={`${css.section} ${css.fourth}`}>
        <h5>Overall</h5>

        <div className={css.field}>
          <span className={css.question}>Progress of project:</span>

          <div className={`${css.answer} ${css.project_progress}`}>
            <label className={css.radio}><input type="radio" name="group-10" />Good</label>
            <label className={css.radio}><input type="radio" name="group-10" />Medium</label>
            <label className={css.radio}><input type="radio" name="group-10" />Bad</label>
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Photo:</span>

          <div className={css.answer}>
            {photo && <div className={css.photo}><img src={photo} /><span>{photoText}</span></div>}
            {!photo ? <input type="file" accept="image/*;capture=camera" onChange={photoChange} /> : null}
          </div>
        </div>

        <div className={css.field}>
          <span className={css.question}>Any other comments:</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div>
      </div>

      <div className={css.center}>
        <button className={css.call_to_action} onClick={() => setPage("thanks")}>
          Submit answers
        </button>
      </div>
    </div>
  </>;
}

export default Form;
