const body = document.querySelector("#body")
const gridContainer = document.querySelector("#gridContainer")
const bgbox = document.getElementsByClassName("gridbox")
const newGridButton = document.querySelector("#newGrid")
const baseColor = document.querySelector("#base")
const bgColor = document.querySelector("#bg")
let drawColor = baseColor.value
let gridBg = ""
let gridSize = 32 * 20
let defaultBg = bgColor.value
let boxSize = ""


// DefaultGrid
function drawGrid(x = 32,gridSize = 32 * 20,boxSize= 20){
for (let i = 0; i < x * x; i++) {
    let box = document.createElement('div')
    box.className = 'gridbox';
    box.style = `height : ${boxSize}px ;width:${boxSize}px;background-color: ${defaultBg};flex-shrink:0`
    gridContainer.appendChild(box)
    console.log("works")
}
gridContainer.style = `display:flex ; max-width: ${gridSize}px;max-height:${gridSize}px;flex-wrap:wrap;box-sizing: border-box`
for (let i = 0; i < bgbox.length; i++) {
    bgbox[i].addEventListener("mouseover", function (e) {
        this.style.backgroundColor = drawColor;
    });
}
}
// Une fonction qui va clean gridContainer

function gridClean() {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
}

// Bouton newGrid
newGridButton.addEventListener("click",function (e){
    gridClean()
    let pvalue = prompt("Grid size ?")
    // let gridSize = pvalue * 20
    let boxSize = gridSize / pvalue
    if (pvalue > 100){pvalue = 100}
    drawGrid(pvalue,gridSize,boxSize)
})
// color change
baseColor.addEventListener("input", function(e) {
    drawColor = baseColor.value
    console.log('color change')
});
bgColor.addEventListener("input", function(e) {
    defaultBg = bgColor.value
    console.log('color change')
  });
drawGrid()

