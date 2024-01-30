// // const paragraphs = document.getElementsByTagName("p");
// // console.log(paragraphs[0].textContent);
// // console.log(paragraphs.length);

// function printValue(){
//     const uname = document.getElementsByName("username")
//     alert("Welcome : "+ uname[0].value)
// }

// function changeStyle(){
//     const firstElement = document.querySelector(".myClass");
//     const allElements = document.querySelectorAll(".myClass");
//     const highElement = document.querySelectorAll("[class~='highlight']")

//     const firstChild = document.querySelector("ul>li:first-child");
//     firstChild.style.color = "blue";
//     firstChild.style.fontSize="200px"

//     const combElements = document.querySelectorAll("h1,h2")
//     combElements[0].style.color="pink"
//     combElements[1].style.color="green"

//     for(let i = 0; i<allElements.length;i++){
//         allElements[i].style.color = "red";
//         allElements[i].style.backgroundColor="#eee";
//         allElements[i].style.fontSize = "40px";
//     }
//     firstElement.style.color="brown"
//     highElement[0].style.fontWeight ="bold"

//     const submitButton = document.querySelectorAll("button[data-action^='btn-']")
//     for(let j = 0; j<submitButton.length;j++){
//     submitButton[j].style.padding = "10px 20px";

//     submitButton[j].style.backgroundColor = "#4caf50";
//     submitButton[j].style.color = "white";
//     submitButton[j].style.border="none";
//     }

//     const Links = document.querySelectorAll("a[href^= 'https://open.spotify.com']")
//     Links.forEach((link)=>{
//         link.style.backgroundColor = "aqua";
//         link.style.textDecoration="none";
//         link.style.fontSize = " 30px ";
//     })

//     const disabledBtn = document.querySelector("button[disabled]");
//     disabledBtn.style.opacity = "1";

//     const evenRows = document.querySelectorAll("tr:nth-child(even)");
//     evenRows.forEach(row=>{
//         row.style.background = "red";
//     })}
// const b= document.querySelector('.btn1');
// b.addEventListener('click',()=>{
//     alert('helloshivam')
// })

// setTimeout(function (){
//     alert("this alert will appear after each second!")
// },1000)

// var count = 0;
// var intervalid = setInterval(function(){
//     count++;
//     console.log("This will run every 2 seconds. Count: ",count);
//     if(count>=100){
//         clearInterval(intervalid);
//     }
// },100)

// console.log("We")
// console.log("Are")
// console.log("Best")
// console.log("Friends")

// console.log("I")
// setTimeout(()=>{
//     console.log("you")
// },5000)
// console.log("hate")

// function myCallback(){
//     console.log("Callback executed!")
// }
// setTimeout(

// myCallback, 3000);

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('promise resolved!');
//         //reject("Something went wrong!")
//     },3000);
// });

// myPromise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error)
// })

async function fetchData(url) {
    try{
  const response = await fetch(url);
  const data = await response.json();
  return data;
}catch(error) { console.error("There was an error fetching data: ");
}
}

fetchData("https://api.example.com/data")

   