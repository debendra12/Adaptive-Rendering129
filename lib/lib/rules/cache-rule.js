export function cacheRule(context) {

  if (context.cacheHit === true) {
    return true;
  }

  return false;
}