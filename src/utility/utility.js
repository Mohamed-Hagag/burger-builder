export const inputValidation = (rules, value) => {
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  if (rules.isEmail) {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = pattern.test(String(value).toLowerCase()) && isValid;
  }
  if (rules.isMobile) {
    const pattern = /^(010|011|012|015)[0-9]{8}$/;
    isValid = pattern.test(String(value).toLowerCase()) && isValid;
  }
  if (rules.isName) {
    const pattern = /^[a-zA-Z]{2,10}$/;
    isValid = pattern.test(String(value).toLowerCase()) && isValid;
  }

  return isValid;
};
