var buttonPress = document.querySelector('#Btn');
var buttonLight = document.querySelector('#Lights');
var Settings = document.querySelector('#Settings');
var Pointer = document.querySelector('#mouse');
var Timer = document.querySelector('#Time');
var TimeSpot = document.querySelector('#time');
var Product = $("#item");
let list = document.querySelector("ul");
var Amount = document.getElementById('Amount');
var Add = $('#Addhere');
var ClearHistory=document.querySelector('#History');
var trial = 0;
var trial2=0;
var Incount =document.getElementById('Incomp');
var AllCount = document.getElementById('Count');
var All= 0;
var Incomplete = 0; 
var flip = true;

var Historyc=$(JSON.parse(localStorage.getItem("list")));
addEntry();
function addEntry() {
    Historyc.sort();
    for (var i = 0; i < Historyc.length; i++){
        if(Historyc[i] === Historyc[i -1]){
            Historyc.splice(i, 1);
            i--;
        }
    }
    CreateList();
}
function CreateList(){
    Add.children().remove();
    for(var i = 0; i <Historyc.length; i++){
    var List = $('<li>');
    List.text(Historyc[i]);
    List.attr('id', 'Productnum');
    List.attr('class', 'AddProduct');

    Add.append(List);
    
    Incomplete=Historyc.length;
    AllCount.innerHTML = All;
    Incount.innerHTML =Incomplete;
    }
  
}


buttonPress.addEventListener("click", function (event) {
    console.log('pressed');
   
    if (Product.val() == "" || Amount.value == "") {
        window.alert('Please Fill out all Fields');
    } else {
        M.toast({ html: 'Item Added!' })
        var temp=(Product.val()+ " x"+ Amount.value);
        Historyc.push(temp);
        localStorage.setItem('list',JSON.stringify(Historyc));
       
        addEntry();
    }

});

$(document).ready(function () {
    $('.modal').modal();
});


Pointer.addEventListener('click', function (event) {

    if (trial == 0) {
        document.body.style.cursor = 'crosshair';
        trial = 1;

    } else if (trial == 1) {
        document.body.style.cursor = 'cell';
        trial = 2;

    }
    else if (trial == 2) {
        document.body.style.cursor = 'grab';
        trial = 3;

    }
    else if (trial == 3) {
        document.body.style.cursor = 'pointer';
        trial = 4;

    }
    else {
        document.body.style.cursor = 'default';
        trial = 0;
    }



})
$('li#Productnum').click(function(event){
   
    event.target.style='text-decoration: line-through'; 
    Incomplete=Incomplete-1;
  
    All=All+1;
    Incount.innerHTML =Incomplete;
    AllCount.innerHTML = All;

    
})


// Dark/light mode 
buttonLight.addEventListener('click', function (event) {
   
    var element = document.body;
   


  
    element.classList.toggle('LightMode');
    
})

Timer.addEventListener('click', function(event){
    
    window.setInterval(function () {
   TimeSpot.innerHTML=moment().format('LTS');
}, 1000);

})


ClearHistory.addEventListener('click',function () {
    localStorage.clear();
    location.reload();
  })