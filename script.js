

var responsiveSlider = function(){
    var count = 0;
    var itemList = document.querySelectorAll(".content");
    var items = document.querySelectorAll(".content").length;
    var next  = document.getElementById("next");
    var prve = document.getElementById("prev");

    console.log(next);


    var active_slider = false;
    
    function next_slide(){
        itemList[count].classList.remove('active');
        if (count+1 >= items){
            count = 0;
            itemList[count].classList.add('active');
        }else {
            itemList[count+1].classList.add('active');
            count ++;
        }
    }
    
    function prev_slide() {
        itemList[count].classList.remove('active');
        if (count-1 < 0){
            count = items-1;
            itemList[count].classList.add('active');
        }else {
            itemList[count-1].classList.add('active');
            count --;
        }
    }

    // Slider starts when the page loads
    setInterval(next_slide,5000);

    // Action listener for forward button
    next.addEventListener('click', function(){
        console.log("inside the listener");
        next_slide(); 
         
    });

    // Action listener for backward button
    prev.addEventListener('click', function(){
        prev_slide();
    });
}

window.onload = function(){
    responsiveSlider();
}