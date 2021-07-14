const isLogged = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state; // return true ( because state is true)
  }
};

export default isLoged;
