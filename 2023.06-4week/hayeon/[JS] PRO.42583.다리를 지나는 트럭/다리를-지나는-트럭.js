function solution(bridge_length, weight, truck_weights) {
  const queue = new Array(bridge_length).fill(0);
  let time = 0;
  let weightSum = 0;

  while (queue.length) {
    time++;

    const queueFirst = queue.shift();
    weightSum += queueFirst;

    if (truck_weights.length) {
      if (truck_weights[0] - weightSum <= weight) {
        const curTruck = truck_weights.shift();

        weightSum -= curTruck;
        queue.push(curTruck);
      } else {
        queue.push(0);
      }
    }
  }

  return time;
}
