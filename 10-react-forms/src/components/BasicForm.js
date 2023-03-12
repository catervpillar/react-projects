import useInput from '../hooks/use-input';

const getInputClasses = x => x ? 'form-control invalid' : 'form-control';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetNameInput
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = getInputClasses(firstNameHasError);
  const lastNameInputClasses = getInputClasses(lastNameHasError);
  const emailInputClasses = getInputClasses(emailHasError);

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstNameValue} />
          {firstNameHasError && <p className='error-text'>Please enter a first name.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='last-name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastNameValue} />
          {lastNameHasError && <p className='error-text'>Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {emailHasError && <p className='error-text'>Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
