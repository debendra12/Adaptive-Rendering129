export function latencyRule(context) {

  if (context.latency > 300) {
    return true;
  }

  return false;
}