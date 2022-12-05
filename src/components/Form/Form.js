import { Link } from 'react-router-dom';
import './Form.css';

const Form = ({ formClass, submitBtnText, children, footerText, footerPath, footerLinkText }) => {
  const formClassNames = `form ${formClass}`;

  return (
    <>
      <form className={formClassNames}>
        {
          children
        }
        <button type="submit" className="form__submit-btn">{submitBtnText}</button>
      </form>
      <div className="form__footer">
        <p className="form__footer-text">{footerText}</p>
        <Link to={footerPath} className="form__footer-back">{footerLinkText}</Link>
      </div>
    </>
  )
}

export default Form