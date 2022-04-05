const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;
const getUserEmail = (state) => state.auth.user.email;
const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getIsFetchingCurrent,
};

export default authSelectors;
