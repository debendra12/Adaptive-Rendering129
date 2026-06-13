import { networkRule } from "./rules/network-rule";
import { cacheRule } from "./rules/cache-rule";
import { sessionRule } from "./rules/session-rule";
import { latencyRule } from "./rules/latency-rule";
import { deviceRule } from "./rules/device-rule";

export function decideStrategy(context) {

  let score = {
    CSR: 0,
    SSR: 0,
    ISR: 0,
    SSG: 0
  };

  if (networkRule(context)) {
    score.SSG += 40;
  }

  if (cacheRule(context)) {
    score.ISR += 40;
  }

  if (sessionRule(context)) {
    score.SSR += 40;
  }

  if (latencyRule(context)) {
    score.SSG += 20;
  }

  if (deviceRule(context)) {
    score.SSR += 20;
  }

  let selected = "CSR";
  let highest = 0;

  for (const strategy in score) {

    if (score[strategy] > highest) {
      highest = score[strategy];
      selected = strategy;
    }
  }

  return {
    selectedStrategy: selected,
    score
  };
}