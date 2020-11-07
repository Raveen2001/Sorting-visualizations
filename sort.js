let speed;
async function bubbleSort() {
  let i,
    j = 0;
  let n = 0;
  count = 0;
  speed = document.getElementById("sizeAndSpeed").value;
  if (speed < 12) {
    speed = speed - 2;
  } else {
    speed = speed;
  }
  for (i = 0; i < values.length; i++) {
    for (j = 0; j <= values.length; j++) {
      if (stop == false) {
        if (values[i] > values[j]) {
          states[i] = 0;
          states[j] = 0;
          await swap(values, j, i);
          states[i] = -1;
          states[j] = -1;
          count++;
        }
      } else {
        count = 0;
        return;
      }
    }
  }
}

async function quickSort(values, start, end) {
  if (stop == false) {
    speed = document.getElementById("sizeAndSpeed").value;
    if (speed < 12) {
      speed = speed - 2;
    } else {
      speed = speed;
    }
    if (start >= end) {
      return;
    }
    let index = await partition(values, start, end);
    states[index] = -1;

    await Promise.all([
      quickSort(values, start, index - 1),
      quickSort(values, index + 1, end),
    ]);
  } else {
    count = 0;
    return;
  }
}
async function partition(values, start, end) {
  if (stop == false) {
    for (let i = start + 1; i < end; i++) {
      states[i] = 0;
    }
    let pivotindex = start;
    let pivot = values[end];
    states[pivotindex] = 1;
    states[end] = 1;
    for (let i = start; i <= end - 1; i++) {
      if (values[i] > pivot) {
        await swap(values, i, pivotindex);
        states[pivotindex] = -1;
        pivotindex++;
        states[pivotindex] = 1;
        count++;
      }
    }
    await swap(values, pivotindex, end);
    count++;
    for (let i = start; i <= end; i++) {
      if (i != pivotindex) {
        states[i] = -1;
      }
    }
    return pivotindex;
  }
}

async function mergeSort(arr) {
  if (stop == false) {
    let n = arr.length;
    if (n < 2) {
      return;
    }
    let mid = Math.round(n / 2);
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < mid; i++) {
      leftArr[i] = arr[i];
      states[i] = 0;
    }

    for (let i = 0; i < n - mid; i++) {
      rightArr[i] = arr[i + mid];
      states[i + mid] = 0;
    }
    await mergeSort(leftArr);
    await mergeSort(rightArr);
    await sleep(speed);
    await merge(leftArr, rightArr, arr);
    for (let i = 0; i < arr.length; i++) {
      states[i] = -1;
    }
    await sleep(speed);
  } else {
    count = 0;
    return;
  }
}

async function merge(leftArr, rightArr, arr) {
  if (stop == false) {
    speed = document.getElementById("sizeAndSpeed").value;
    if (speed < 12) {
      speed = speed - 2;
    } else {
      speed = speed;
    }
    let lSize = leftArr.length;
    let rSize = rightArr.length;
    let i = 0,
      j = 0,
      k = 0;
    while (i < lSize && j < rSize) {
      if (leftArr[i] > rightArr[j]) {
        arr[k] = leftArr[i];
        values[k] = arr[k];
        states[k] = 1;
        k++;
        i++;
      } else {
        arr[k] = rightArr[j];
        values[k] = arr[k];
        states[k] = 1;
        j++;
        k++;
      }
      count++;
      await sleep(speed);
    }
    while (i < lSize) {
      arr[k] = leftArr[i];
      values[k] = arr[k];
      states[k] = 1;
      await sleep(speed);
      k++;
      i++;
    }
    while (j < rSize) {
      arr[k] = rightArr[j];
      values[k] = arr[k];
      states[k] = 1;
      await sleep(speed);
      j++;
      k++;
      count++;
    }
  } else {
    count = 0;
    return;
  }
}

async function swap(arr, a, b) {
  if (stop == false) {
    await sleep(speed);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    count++;
  }
}

async function sleep(ms) {
  console.log("time : " + ms);
  return new Promise((resolve) => setTimeout(resolve, ms));
}
