export function analyzeContext(data) {

  return {
    networkSpeed: data.networkSpeed,
    cacheHit: data.cacheHit,
    userLoggedIn: data.userLoggedIn,
    latency: data.latency,
    deviceRam: data.deviceRam,
    cpuCores: data.cpuCores
  };
}