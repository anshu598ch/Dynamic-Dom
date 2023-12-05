// javascript code goes here
//getting elements and declaring variables
let btn1 = document.getElementById("colorchange");
let ip1 = document.getElementById("colorbox");
let div1 = document.getElementById("text-container");
let flag1 = false; //to set/unset underline
let flag2 = false; // to set/unset italics
let flag3 = false; //to set/unset bold
var color = "black";
var decor = "none";
var weight = "normal";
var style = "normal";
var font = "sans-serif";
var size = "55px";

//taking color input form inputbox on changecolor button 
btn1.addEventListener('click', (e) => {
    let clr = ip1.value;
    div1.style.color = clr;
    e.preventDefault();
    color = clr;
});

// setting evenlistener in range and applying its value to text
let range1 = document.getElementById("fontsize");
range1.addEventListener('input', (e) => {
    div1.style.fontSize = (parseInt(range1.value) + "px");
    size = range1.value + "px";
    e.preventDefault();
});

//do/undo underline
let btng = document.getElementsByClassName("stylebt");
btng[0].addEventListener('click', (e) => {
    if (!flag1) {
        div1.style.textDecoration = "underline";
        decor = "underline";
        e.preventDefault();
        flag1 = true;
    } else {
        flag1 = false;
        div1.style.textDecoration = "none";
        e.preventDefault();
        decor = "none";
    }

});

//do/undo italics
btng[1].addEventListener('click', (e) => {
    if (!flag2) {
        div1.style.fontStyle = "italic";
        flag2 = true;
        e.preventDefault();
        style = "italic";
    } else {
        div1.style.fontStyle = "normal";
        flag2 = false;
        e.preventDefault();
        style = "normal";
    }

});
//do/undo bold
btng[2].addEventListener('click', (e) => {
    if (!flag3) {
        div1.style.fontWeight = "bold";
        flag3 = true;
        weight = "bold"
        e.preventDefault();
    } else {
        flag3 = false;
        div1.style.fontWeight = "normal";
        e.preventDefault();
        weight = "normal";
    }
});
//selecting font family
let fontfam = document.getElementById("list");
fontfam.addEventListener('click', (e) => {
    //alert(fontfam.value)
    div1.style.fontFamily = fontfam.value;
    font = fontfam.value;
    e.preventDefault();

});

//getting css poperties of the text
let getstyle = document.getElementById("getstyle");
getstyle.addEventListener('click', (e) => {
    document.getElementById("css-props").innerText = `color: ${color}; font-size: ${size}; text-decoration: ${decor}; font-style: ${style}; font-weight: ${weight}; font-family: ${font};`
    e.preventDefault();
})