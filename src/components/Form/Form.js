import { Link } from 'react-router-dom';
import './Form.css';

const Form = ({ formClass, submitBtnText, children, footerText, footerPath, footerLinkText }) => {
  const formClassNames = `form ${formClass}`;

  return (
    <div className='form-container'>
      <form className={formClassNames}>
        {
          children
        }
        <button type="submit" className="form__submit-btn">{submitBtnText}</button>
      </form>
      <div className="form-container__bottom">
        <p className="form-container__text">{footerText}</p>
        <Link to={footerPath} className="form-container__back">{footerLinkText}</Link>
      </div>
    </div>
  )
}

export default Form