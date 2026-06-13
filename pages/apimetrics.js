export default function handler(req, res) {

  res.status(200).json({

    networkSpeed: 2,

    cacheHit: true,

    userLoggedIn: false,

    latency: 150,

    deviceRam: 8,

    cpuCores: 4

  });

}