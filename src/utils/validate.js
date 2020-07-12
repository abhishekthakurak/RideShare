
// check for valid user

export default (questions, state) => {
  let isValidated = true;
  questions.forEach(({ validate, id }, index) => {
    if (!validate(state[id], state)) {
      questions[index].isError = true;
      isValidated = false;
    } else {
      questions[index].isError = false;
    }
  });
  return {
    isValidated,
    questions
  };
};
