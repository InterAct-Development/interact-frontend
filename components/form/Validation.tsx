
const validateForm = (values: any) => {
  console.log("Inside Validation" + values);

  const errors: { [key: string]: string } = {};
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!values.email) {
    errors.email = "Required";
  } else if (!regEx.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
};

export default validateForm;
