const paragraph = document
  .getElementById("myParagraph")
  .innerText.toLowerCase()
  .split(/[,\s.:;]+/);
const myCloud = document.getElementById("myWordCloud");
const result = paragraph.reduce(
  function (occurrences, curr) {
    if (occurrences.hasOwnProperty(curr)) {
      occurrences[curr]++;
    } else {
      occurrences[curr] = 1;
    }
    return occurrences;
  },
  [{}]
);
const toFont = [];
const answer = Object.entries(result)
  .sort((a, b) => b[1] - a[1])
  .slice(1)
  .map((e) => e.join(": "))
  .slice(0, 12);
const el = []
for (let i = 0; i < answer.length; i++) {
    el.push(answer[i].split(":")[0])
}
let fontsize = 68;
for(let i=0; i<el.length; i++){
    fontsize-=4
    const cloudWord = document.createElement("p");
    cloudWord.textContent = el[i];
    cloudWord.style.fontSize = fontsize+"px"
    myCloud.appendChild(cloudWord)
}
document.body.appendChild(myCloud)

