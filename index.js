 //document.getElementById("count-el").innerText=5 
 let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")

 console.log(countEl)
 
let count = 0

console.log(saveEl)

console.log(count)

function increment() {
    console.log("clicked")
    count += 1
    countEl.innerText = count
    console.log(count)

}

function save() {
    let countStr = count + "-"

    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}




