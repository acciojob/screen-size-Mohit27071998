//your JS code here. If required.
const size = document.createElement("h1");
size.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
document.body.append(size);

window.onresize = function(){
    size.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}