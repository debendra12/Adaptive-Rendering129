export function sessionRule(context) {

  if (context.userLoggedIn === true) {
    return true;
  }

  return false;
}