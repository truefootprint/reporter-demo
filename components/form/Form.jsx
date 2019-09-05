import { useState } from 'react';
import Spinner from "../spinner";
import Photo from "../photo";
import Footer from "../footer";
import css from "./styles.scss";

const Form = ({ setPage, content }) => {
  const section1 = content.section1;
  const section2 = content.section2;
  const section3 = content.section3;
  const section4 = content.section4;
  const section5 = content.section5;
  const section6 = content.section6;

  return <>
    <Spinner />

    <div className={css.form}>
      <h3>{content.title}</h3>

      <a className={css.back} onClick={() => setPage("overview")}>&lt; {content.back}</a>
      <p className={css.intro}>{content.intro}</p>

      { section1 &&
      <div className={`${css.section} ${css.first}`}>
        <h5>{section1.title}</h5>

        { (section1.question1 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section1.question1}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section1.placeholder1} />
          </div>
        </div> </>}

        { (section1.question2 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section1.question2}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section1.placeholder2} />
          </div>
        </div> </>}

        { (section1.question3 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section1.question3}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section1.placeholder3} />
          </div>
        </div> </>}

        { (section1.question4 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section1.question4}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section1.placeholder4} />
          </div>
        </div> </>}

        { (section1.question5 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section1.question5}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section1.placeholder5} />
          </div>
        </div> </>}

        { (section1.question6 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section1.question6}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-1" />{section1.option6a}</label>
            <label className={css.radio}><input type="radio" name="group-1" />{section1.option6b}</label>
          </div>
        </div> </>}

        { (section1.question7 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section1.question7}</span>
          <div className={css.answer}><Photo placeholder={section1.placeholder7} /></div>
        </div> </>}

        { (section1.question8 || '').length > 0 && <>
        <div className={`${css.field} ${css.any_other_comments}`}>
          <span className={css.question}>{section1.question8}</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div> </>}
      </div> }

      { section2 &&
      <div className={`${css.section} ${css.second}`}>
        <h5>{section2.title}</h5>

        { (section2.question1 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section2.question1}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-2" />{section2.option1a}</label>
            <label className={css.radio}><input type="radio" name="group-2" />{section2.option1b}</label>
          </div>
        </div> </>}

        { (section2.question2 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section2.question2}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-3" />{section2.option2a}</label>
            <label className={css.radio}><input type="radio" name="group-3" />{section2.option2b}</label>
          </div>
        </div> </>}

        { (section2.question3 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section2.question3}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-4" />{section2.option3a}</label>
            <label className={css.radio}><input type="radio" name="group-4" />{section2.option3b}</label>
          </div>
        </div> </>}

        { (section2.question4 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section2.question4}</span>

          <div className={css.answer}>
            <input type="date" />
          </div>
        </div> </>}

        { (section2.question5 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section2.question5}</span>
          <div className={css.answer}><Photo placeholder={section2.placeholder5} /></div>
        </div> </>}

        { (section2.question6 || '').length > 0 && <>
        <div className={`${css.field} ${css.any_other_comments}`}>
          <span className={css.question}>{section2.question6}</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div> </>}
      </div> }

      { section3 &&
      <div className={`${css.section} ${css.third}`}>
        <h5>{section3.title}</h5>

        { (section3.question1 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section3.question1}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-5" />{section3.option1a}</label>
            <label className={css.radio}><input type="radio" name="group-5" />{section3.option1b}</label>
          </div>
        </div> </>}

        { (section3.question2 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section3.question2}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-6" />{section3.option2a}</label>
            <label className={css.radio}><input type="radio" name="group-6" />{section3.option2b}</label>
          </div>
        </div> </>}

        { (section3.question3 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section3.question3}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-7" />{section3.option3a}</label>
            <label className={css.radio}><input type="radio" name="group-7" />{section3.option3b}</label>
          </div>
        </div> </>}

        { (section3.question4 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section3.question4}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-8" />{section3.option4a}</label>
            <label className={css.radio}><input type="radio" name="group-8" />{section3.option4b}</label>
          </div>
        </div> </>}

        { (section3.question5 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section3.question5}</span>

          <div className={css.answer}>
            <label className={css.radio}><input type="radio" name="group-9" />{section3.option5a}</label>
            <label className={css.radio}><input type="radio" name="group-9" />{section3.option5b}</label>
          </div>
        </div> </>}

        { (section3.question6 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section3.question6}</span>
          <div className={css.answer}><Photo placeholder={section3.placeholder6} /></div>
        </div> </>}

        { (section3.question7 || '').length > 0 && <>
        <div className={`${css.field} ${css.any_other_comments}`}>
          <span className={css.question}>{section3.question7}</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div> </>}
      </div> }

      { section4 &&
      <div className={`${css.section} ${css.fourth}`}>
        <h5>{section4.title}</h5>

        { (section4.question1 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section4.question1}</span>

          <div className={`${css.answer} ${css.project_progress}`}>
            <label className={css.radio}><input type="radio" name="group-10" />{section4.option1a}</label>
            <label className={css.radio}><input type="radio" name="group-10" />{section4.option1b}</label>
            <label className={css.radio}><input type="radio" name="group-10" />{section4.option1c}</label>
          </div>
        </div> </>}

        { (section4.question2 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section4.question2}</span>
          <div className={css.answer}><Photo placeholder={section4.placeholder2} /></div>
        </div> </>}

        { (section4.question3 || '').length > 0 && <>
        <div className={`${css.field} ${css.any_other_comments}`}>
          <span className={css.question}>{section4.question3}</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div> </>}
      </div> }

      { section5 &&
      <div className={`${css.section} ${css.first}`}>
        <h5>{section5.title}</h5>

        { (section5.question1 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section5.question1}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section5.placeholder1} />
          </div>
        </div> </>}

        { (section5.question2 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section5.question2}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section5.placeholder2} />
          </div>
        </div> </>}

        { (section5.question3 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section5.question3}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section5.placeholder3} />
          </div>
        </div> </>}

        { (section5.question4 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section5.question4}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section5.placeholder4} />
          </div>
        </div> </>}

        { (section5.question5 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section5.question5}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section5.placeholder5} />
          </div>
        </div> </>}

        { (section5.question6 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section5.question6}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section5.placeholder6} />
          </div>
        </div> </>}

        { (section5.question8 || '').length > 0 && <>
        <div className={`${css.field} ${css.any_other_comments}`}>
          <span className={css.question}>{section5.question8}</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div> </>}
      </div> }

      { section6 &&
      <div className={`${css.section} ${css.first}`}>
        <h5>{section6.title}</h5>

        { (section6.question1 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section6.question1}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section6.placeholder1} />
          </div>
        </div> </>}

        { (section6.question2 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section6.question2}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section6.placeholder2} />
          </div>
        </div> </>}

        { (section6.question3 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section6.question3}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section6.placeholder3} />
          </div>
        </div> </>}

        { (section6.question4 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section6.question4}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section6.placeholder4} />
          </div>
        </div> </>}

        { (section6.question5 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section6.question5}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section6.placeholder5} />
          </div>
        </div> </>}

        { (section6.question6 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section6.question6}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section6.placeholder6} />
          </div>
        </div> </>}

        { (section6.question7 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section6.question7}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section6.placeholder8} />
          </div>
        </div> </>}

        { (section6.question8 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section6.question8}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section6.placeholder8} />
          </div>
        </div> </>}

        { (section6.question9 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section6.question9}</span>
          <div className={css.answer}>
            <input type="text" placeholder={section6.placeholder9} />
          </div>
        </div> </>}

        { (section6.question10 || '').length > 0 && <>
        <div className={css.field}>
          <span className={css.question}>{section6.question10}</span>
          <div className={css.answer}><Photo placeholder={section6.placeholder10} /></div>
        </div> </>}

        { (section6.question11 || '').length > 0 && <>
        <div className={`${css.field} ${css.any_other_comments}`}>
          <span className={css.question}>{section6.question11}</span>
        </div>
        <div className={css.offset}>
          <textarea></textarea>
        </div> </>}
      </div> }

      <div className={css.center}>
        <button className={css.call_to_action} onClick={() => setPage("thanks")}>
          {content.call_to_action}
        </button>
      </div>

      <Footer />
    </div>
  </>;
}

export default Form;
