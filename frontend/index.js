const resultDiv = document.getElementById('item');
const timer=document.getElementById('timer');
const toggler=document.getElementById('check-apple');

// Timer function
let value=0;
const timerFunction=()=>{
value++;
if(value==60){
    value=0;
}
timer.innerHTML=value;
}
setInterval(timerFunction,1000);
// Toggle to light and dark mode
const toggleFunction=()=>{
    console.log("hello")
    document.body.classList.toggle('light-mode');
}
toggler.addEventListener(onclick,toggleFunction)
// API Calling
const fetchAPI=async()=>{
    const url='http://localhost:5000/api/get/result';
    const response=await fetch(url);
    const data=await response.json();
    const items=data.data;
    items.forEach((item,index) => {
        const newItem = document.createElement("div");
newItem.className = "items";
newItem.innerHTML = `
    <div class="serial_no">${index+1}</div>
    <div class="name">${item.name}</div>
    <div class="base_unit">${item.base_unit}</div>
    <div class="last">${item.last}</div>
    <div class="buy">${item.buy}/${item.sell}</div>
    <div class="sell">${item.volume}</div>
`;
resultDiv.appendChild(newItem);
    });
}
fetchAPI();



