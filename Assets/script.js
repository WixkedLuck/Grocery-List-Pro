var buttonPress = document.querySelector('#Btn');
var Product =$("#item");
var Amount =$('#Amount');
var Add= $('#Addhere');

buttonPress.addEventListener("click", function (event) {  
    console.log('pressed');
    if(Product.val() == "" || Amount.val() == ""){
       window.alert('Please Fill out all Fields');
}

    var List =$('<h1>');
    console.log(Product.val()+" x"+Amount.val())
    List.text(Product.val()+" x"+Amount.val());
    List.attr('id','AddProduct');
    Add.append(List);


});