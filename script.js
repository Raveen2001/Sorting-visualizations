function changeSlider(val) {
  w = val;
  console.log(w);
  stop = true;
  setup();
}

async function startAlgo() {
  count = 0;
  let btn = document.getElementById("startBtn");
  btn.disabled = true;
  let txt = document.getElementById("options").innerText;
  console.log(txt);
  switch (txt) {
    case "Bubble Sort":
      await bubbleSort();

      break;

    case "Merge Sort":
      await mergeSort(values);
      break;

    case "Quick Sort":
      await quickSort(values, 0, values.length - 1);
      break;

    case "Heap Sort":
      console.log("Heap Sort");
      break;

    default:
      alert("Select a Sorting Algorithm");
  }
  btn.disabled = false;
  stop = false;
}

function resetSketch() {
  count = 0;
  setup();
}
