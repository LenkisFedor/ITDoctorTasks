// function onEntry(entry) {
//     entry.forEach(change => {
//       if (change.isIntersecting) {
//         change.target.classList.add('element-show');
//       }
//     });
//   }
//   let options = { threshold: [0.5] };
//   let observer = new IntersectionObserver(onEntry, options);
//   let elements = document.querySelectorAll('.element-animation');
//   for (let elm of elements) {
//     observer.observe(elm);
//   }

$(document).on("greating-text", window, function() {
    if ($(window).scrollTop() > 10){
        $("greating-text").fadeIn(200);
    }
    else{
        $("greating-text").fadeOut(200);
    }
});

// $(window).scroll(function(e){
//     if($(window).scrollTop()>=500){
//         $("div.greating-text").fadeIn(200);
//     } else{
//         $("div.greating-text").fadeOut(200);
//     }
// });