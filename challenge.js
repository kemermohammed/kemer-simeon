// hurdlerace challenge

function hurdleRace(k, height) {

    // Write your code here
    let max = Math.max.apply(null, height);
    return max > k ? max - k : 0;

}

// Design pdf viewer

function designerPdfViewer(heights, word) {
  let tallestCharHeight = 0;
  let index = 0;
  for (let i = 0; i < word.length; i++) {
    index = word.charCodeAt(i) - 97;

    if (heights[index] > tallestCharHeight) {
      tallestCharHeight = heights[index];
    }
  }
  return tallestCharHeight * word.length;
}