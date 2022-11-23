//document.getElementById('count').innerHTML = 5

let count = 0

function increment(){
    count += 1
    document.getElementById('count-el').innerText = count
}

function save(){
    let countStr = count + " - "
    document.getElementById('save-el').textContent += countStr
    document.getElementById('count-el').textContent = 0
    count = 0
}