// getElementById Example
document.getElementById("id_example").innerHTML = "Hello There This is getElementById Example";
document.getElementById("id_example").style.backgroundColor="red";


// getElementsByTag Example
const tag_example_element =  document.getElementsByClassName("tag_example")[0];
const h1_elements_inside_tag_example = tag_example_element.getElementsByTagName("h1");
console.log(h1_elements_inside_tag_example);
for(h1 of h1_elements_inside_tag_example){
    h1.style.fontFamily = "Helvetica";
}

// getElementsByClass Example
document.getElementsByClassName("tag_example")[0].style.backgroundColor = "blue"
document.getElementsByClassName("class_example")[0].innerHTML = "<h1>Hello this is class example</h1>"

// querySelector Example
const query_selector = document.querySelectorAll("p.query_selector_example")
for(ele of query_selector){
    ele.innerHTML = "Query Selector Example"
    ele.style.backgroundColor = "yellow"
}



function handleSubmit(){
    const form = document.forms["form_example"];
    var text = "" 
    console.log(form);
    for(ele of form){
        text += ele.value + " "
    }
    document.getElementById("form_output").innerText = text;
    // console.log(text);
}

const changeImage = () => {
    document.getElementById("anime_image").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFHoJ95tyvQqUjHb_0sgeED3ubrXhmif9Lw&usqp=CAU"
} 

document.getElementById("remove_btn").onclick = removeImage = () => {
    document.getElementById('anime_image').style.display = "None"
}


document.getElementById("anime_image").onmouseover = () => {
    document.getElementById('anime_image').src = "https://wallpaperaccess.com/full/419369.jpg"
}

document.getElementById("anime_image").addEventListener("mouseout",() => {
    document.getElementById('anime_image').src = "https://wallpapercave.com/wp/wp8562124.jpg"
})

window.addEventListener("resize",function(){
    console.log("Window is resized")
})



const new_para = document.createElement("p");
const text_node = document.createTextNode("This is appended p tag")
const nodes_example = document.getElementById("nodes_example")
function appendPara(){
    new_para.appendChild(text_node);
    nodes_example.appendChild(new_para);
}

document.getElementById('remove_para_btn').addEventListener('click',() => {
    nodes_example.removeChild(new_para)
})

function addBetween(){
    const p1 = document.getElementById("p2");
    new_para.appendChild(text_node);
    nodes_example.insertBefore(new_para,p1)
}