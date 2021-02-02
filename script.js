
let pathMan =  'Clothes/Man/';
let pathWoman = 'Clothes/Woman/';
let pathStyle = 'Street/'
let pathGender = pathMan;
let path = pathGender + pathStyle;



//........................................................................DARK MODE ENABLE
$('.dark-mode-button').click(function(){
    $('.dark-mode-button').toggleClass('dark-mode-button-dark');
    $('.container').toggleClass('container-dark');
    $('.menu-button').toggleClass('menu-button-dark');
    $('form').toggleClass('form-dark');
});

//........................................................................REFRESH FUNCTION

function refresh() {
    numAddition = Math.floor((Math.random() * numAdditionMax) + 1);
    numTop = Math.floor((Math.random() * numTopMax) + 1);
    numPants = Math.floor((Math.random() * numPantsMax) + 1);
    numShoes = Math.floor((Math.random() * numShoesMax) + 1);
    
    $(".additionalContent").css("background-image","url("+ path +"additional/"+numAddition+".png)");
    $(".topContent").css("background-image","url("+ path +"top/"+numTop+".png)");
    $(".pantsContent").css("background-image","url("+ path +"pants/"+numPants+".png)");
    $(".shoesContent").css("background-image","url("+ path +"shoes/"+numShoes+".png)");
}
//........................................................................CHANGE STYLE


$('#casual').click(function() {
    pathStyle=this.value;
    path = pathGender + pathStyle;
    console.log(path);
    numAdditionMax=5;
    numTopMax=10;
    numPantsMax=10;
    numShoesMax=5;
    refresh();
})

$('#smart').click(function() {
    pathStyle=this.value;
    path = pathGender + pathStyle;
    console.log(path);
    numAdditionMax=5;
    numTopMax=10;
    numPantsMax=10;
    numShoesMax=5;
    refresh();
})

$('#street').click(function() {
    pathStyle=this.value;
    path = pathGender + pathStyle;
    console.log(path);
    numAdditionMax=5;
    numTopMax=10;
    numPantsMax=10;
    numShoesMax=5;
    refresh();
})

$('#all').click(function() {
    pathStyle= this.value;
    path = pathGender + pathStyle;
    numAdditionMax=10;
    numTopMax=30;
    numPantsMax=30;
    numShoesMax=10;
    console.log(path);
    refresh();
})

//........................................................................CHANGE GENDER

$('#radioMan').click(function() {
    $(".forWho").html("For Him");
    pathGender=pathMan;
    path= pathGender + pathStyle;
    console.log(path);
    refresh();

})
$('#radioWoman').click(function() {
    $(".forWho").html("For Her");
    pathGender=pathWoman;
    path= pathGender + pathStyle;
    console.log(path);
    refresh();
})


//........................................................................CHANGE CLOTHES ON ARROW CLICK
  

   let numAddition = 1;
   let numAdditionMax=5;
   let numTop = 1;
   let numTopMax = 10;
   let numPants = 1;
   let numPantsMax = 10;
   let numShoes = 1;
   let numShoesMax = 5;

   

 $('.additionalL').click(function(){
    numAddition--
    if(numAddition < 1){
        numAddition=numAdditionMax;
    }
    $(".additionalContent").css("background-image","url("+ path +"additional/"+numAddition+".png)");
})
 $('.additionalR').click(function(){
    numAddition++
    if(numAddition > numAdditionMax){
        numAddition=1;
    }
    $(".additionalContent").css("background-image","url("+ path +"additional/"+numAddition+".png)");
 }) 

 $('.topL').click(function(){
    numTop--
    if(numTop < 1){
        numTop=numTopMax;
    }
    $(".topContent").css("background-image","url("+ path +"top/"+numTop+".png)");
  
 })
 $('.topR').click(function(){

    numTop++
    if(numTop>numTopMax){
        numTop = 1;
    }
    $(".topContent").css("background-image","url("+ path +"top/"+numTop+".png)");
    

 })

 $('.pantsL').click(function(){
    numPants--
    if(numPants < 1){
        numPants=numPantsMax;
    }
    $(".pantsContent").css("background-image","url("+ path +"pants/"+numPants+".png)");
 })
 $('.pantsR').click(function(){
    numPants++
    if(numPants > numPantsMax){
        numPants= 1;
    }
    $(".pantsContent").css("background-image","url("+ path +"pants/"+numPants+".png)");
 })
 
 $('.shoesL').click(function(){
    numShoes--
    if(numShoes < 1){
        numShoes=numShoesMax;
    }
    $(".shoesContent").css("background-image","url("+ path +"shoes/"+numShoes+".png)");
 })
 $('.shoesR').click(function(){
    numShoes++
    if(numShoes > numShoesMax){
        numShoes=1;
    }
    $(".shoesContent").css("background-image","url("+ path +"shoes/"+numShoes+".png)");
 })

//........................................................................RANDOM SET SCRIPT



function random() {
    numAddition = Math.floor((Math.random() * numAdditionMax) + 1);
    numTop = Math.floor((Math.random() * numTopMax) + 1);
    numPants = Math.floor((Math.random() * numPantsMax) + 1);
    numShoes = Math.floor((Math.random() * numShoesMax) + 1);

    $(".additionalContent").css("background-image","url("+ path +"additional/"+numAddition+".png)");
    $(".topContent").css("background-image","url("+ path +"top/"+numTop+".png)");
    $(".pantsContent").css("background-image","url("+ path +"pants/"+numPants+".png)");
    $(".shoesContent").css("background-image","url("+ path +"shoes/"+numShoes+".png)");
}

$(document).ready(function() {
    random();
});

//........................................................................SAVE AS PDF
function CreatePDFfromHTML() {
    console.log('działa');
    var HTML_Width = $(".show-clothes").width();
    var HTML_Height = $(".show-clothes").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
    $(".arrow").css('opacity','0%');
    html2canvas($(".show-clothes")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) { 
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
        }
        pdf.save("Wearly-style.pdf");
        $(".arrow").css('opacity','100%');
        

    });
}



