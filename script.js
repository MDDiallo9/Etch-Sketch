const start = document.querySelector('#start')

start.addEventListener("click",() => {
    grid();
    console.log("pressed");
    const body = document.querySelector("body")
    const reset = document.createElement("button")
    reset.innerText = "RESET"
    body.appendChild(reset)
    reset.addEventListener("click",function (e){bgbox.style.backgroundColor = "black"})

    
},{once : true})

function grid(){
    function boxer(){ for (let i = 0; i < 1024; i++) {
        let box = document.createElement('div')
        box.className = 'gridbox';
        box.style = "height : 20px ;width:20px;background-color: #c7bfc7; border: solid black 1px;flex-shrink:0"
        grid.appendChild(box)
        console.log("works")
    }
    return
}
    const body = document.querySelector("body")
    const grid = document.createElement('div')
    grid.style = "display:flex ; max-width: 704px;max-height:704px;flex-wrap:wrap;box-sizing: border-box"
    body.appendChild(grid)
    const boxes = boxer()
    const bgbox = document.querySelectorAll(".gridbox")
    for (let i = 0; i < bgbox.length; i++) {
        bgbox[i].addEventListener("mouseover", function (e) {
            this.style.backgroundColor = "black";
        });
    }
}

