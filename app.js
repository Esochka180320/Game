window.onload = function () {
 
for (var i=0; i<9; i++) {
    
 
    $('#game').append('<div class="block ' + i +'"></div>');


}

    var x=0
    var hod = 0;
    var o=0
 
    $('.block').on('click', (e) =>  {
        
        if ($(e.currentTarget).hasClass('block') && !($(e.currentTarget).hasClass('x')) && !($(e.currentTarget).hasClass('-x'))) {
        if (hod%2==0){
           
            $(e.currentTarget).html('<div>x</div>');
            $(e.currentTarget).addClass('x');

        }
            else {
             
                $(e.currentTarget).html('<div>0</div>');
                $(e.currentTarget).addClass('-x');
                }
                hod++;
                
        }


if($('.0').hasClass('x') && $('.3').hasClass('x') && $('.6').hasClass('x')){
       
        
        winx();
        whowin();
    }
if($('.1').hasClass('x') && $('.4').hasClass('x') && $('.7').hasClass('x')){
        
        
        winx();
        whowin();
    }
if($('.2').hasClass('x') && $('.5').hasClass('x') && $('.8').hasClass('x')){
        
        
        winx();
        whowin();
    }    
if($('.0').hasClass('x') && $('.1').hasClass('x') && $('.2').hasClass('x')){
        
        
        winx();
        whowin();
    }
if($('.3').hasClass('x') && $('.4').hasClass('x') && $('.5').hasClass('x')){
        
        
        winx();
        whowin();
    }
if($('.6').hasClass('x') && $('.7').hasClass('x') && $('.8').hasClass('x')){
       
        
        winx();
        whowin();
    }
if($('.0').hasClass('x') && $('.4').hasClass('x') && $('.8').hasClass('x')){
        
       
        winx();
        whowin();
    }
if($('.2').hasClass('x') && $('.4').hasClass('x') && $('.6').hasClass('x')){
        
        
        winx();
        whowin();
    }
if($('.0').hasClass('-x') && $('.3').hasClass('-x') && $('.6').hasClass('-x')){
        
        win0();
        whowin();
    }
if($('.1').hasClass('-x') && $('.4').hasClass('-x') && $('.7').hasClass('-x')){
        
        
        win0();
        whowin();
    }
if($('.2').hasClass('-x') && $('.5').hasClass('-x') && $('.8').hasClass('-x')){
        
        
        win0();
        whowin();
    }    
if($('.0').hasClass('-x') && $('.1').hasClass('-x') && $('.2').hasClass('-x')){
        
        
        win0();
        whowin();
    }
if($('.3').hasClass('-x') && $('.4').hasClass('-x') && $('.5').hasClass('-x')){
        
        
        win0();
        whowin();
    }
if($('.6').hasClass('-x') && $('.7').hasClass('-x') && $('.8').hasClass('-x')){
        
        
        win0();
        whowin();
    }
if($('.0').hasClass('-x') && $('.4').hasClass('-x') && $('.8').hasClass('-x')){
        
        
        win0();
        whowin();
    }
if($('.2').hasClass('-x') && $('.4').hasClass('-x') && $('.6').hasClass('-x')){
        
        
        win0();
        whowin();
    }  

if(($('.0').hasClass('-x') || $('.0').hasClass('x')) && ($('.1').hasClass('-x') || $('.1').hasClass('x')) && ($('.2').hasClass('-x') || $('.2').hasClass('x')) && ($('.3').hasClass('-x') || $('.3').hasClass('x')) && ($('.4').hasClass('-x') || $('.4').hasClass('x')) && ($('.5').hasClass('-x') || $('.5').hasClass('x')) && ($('.6').hasClass('-x') || $('.6').hasClass('x')) && ($('.7').hasClass('-x') || $('.7').hasClass('x')) && ($('.8').hasClass('-x') || $('.8').hasClass('x')) )  
 {
   draw();
 }

        });


 function winx(){
    x++;
    alert('win x');

    if($('.block').hasClass('-x') || $('.block').hasClass('x')){

        return $('.block').removeClass('-x') && $('.block').removeClass('x') && $('.block').html(' ') && $('.winxx').html(x);
        
    }
    
 }
  function win0(){
    o++;
    alert('win 0');
    
    if($('.block').hasClass('-x') || $('.block').hasClass('x')){
    
        return $('.block').removeClass('-x') && $('.block').removeClass('x') && $('.block').html(' ') && $('.win00').html(o);
        
    }
    
 }

   function draw(){
   
    alert('draw');
    
    if($('.block').hasClass('-x') || $('.block').hasClass('x')){
    
        return $('.block').removeClass('-x') && $('.block').removeClass('x') && $('.block').html(' ') ;
        
    }
    
 }
  function whowin(){
    
    if($('.winxx').text()>$('.win00').text() ){
        
        return $('.whowin').html(">");
        
    }
    else if($('.winxx').text()<$('.win00').text() ){
        
        return $('.whowin').html("<");
        
    } 
    else{
            return $('.whowin').html("=");
    }
    
 }



    
   } 