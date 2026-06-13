export function networkRule(context) {

  if (context.networkSpeed <= 2) {
    return true;
  }

  return false;
}