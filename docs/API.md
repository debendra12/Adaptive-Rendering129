# API Documentation

## GET /api/metrics

Returns runtime metrics.

### Response

```json
{
  "networkSpeed": 2,
  "cacheHit": true,
  "userLoggedIn": false,
  "latency": 150,
  "deviceRam": 8,
  "cpuCores": 4
}
```

## Decision Engine

### decideStrategy(context)

Evaluates all rules and returns the optimal rendering strategy.

### Example

```javascript
const result = decideStrategy(context);

console.log(result);
```

### Response

```json
{
  "selectedStrategy": "SSR",
  "score": {
    "CSR": 0,
    "SSR": 60,
    "ISR": 0,
    "SSG": 60
  }
}
```