export function deviceRule(context) {

  if (
    context.deviceRam <= 4 ||
    context.cpuCores <= 2
  ) {
    return true;
  }

  return false;
}