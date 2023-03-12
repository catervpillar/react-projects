import useInput from '../hooks/use-input';

const getInputClasses = x => x ? 'form-control invalid' : 'form-control';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = '' // NOT IDEAL, DON'T MANIPULATE THE DOM, REACT SHOULD TAKE CARE OF THAT
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = getInputClasses(nameInputHasError);
  const emailInputClasses = getInputClasses(emailInputHasError);

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E- mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className='error-text'>Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
