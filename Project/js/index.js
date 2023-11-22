
// var util = {
//     mobileMenu() {
//       $("#nav").toggleClass("nav-visible");
//     },
//     windowResize() {
//       if ($(window).width() > 800) {
//         $("#nav").removeClass("nav-visible");
//       }
//     },
//     scrollEvent() {
//       var scrollPosition = $(document).scrollTop();
      
//       $.each(util.scrollMenuIds, function(i) {
//         var link = util.scrollMenuIds[i],
//             container = $(link).attr("href"),
//             containerOffset = $(container).offset().top,
//             containerHeight = $(container).outerHeight(),
//             containerBottom = containerOffset + containerHeight;
  
//         if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
//           $(link).addClass("active");
//         } else {
//           $(link).removeClass("active");
//         }
//       });
//     }
//   };
  
//   $(document).ready(function() {
    
//     util.scrollMenuIds = $("a.nav-link[href]");
//     $("#menu").click(util.mobileMenu);
//     $(window).resize(util.windowResize);
//     $(document).scroll(util.scrollEvent);
    
//   });
  const content = [
    {
        thumnail : "image/BLACKSOUL.jpg",
        title : "BLACK SOUL TEE",
        desc : "19.99$",
    },
    {
        thumnail : "image/detex.jpg",
        title : "Detex Gaming TEE",
        desc : "19.99$",
    },
    {
        thumnail : "image/PINK.jpg",
        title : "PINK TEE LE",
        desc : "19.99$",
    },
    {
        thumnail : "image/PINK.jpg",
        title : "PINK TEE LE",
        desc : "19.99$",
    },
    {
        thumnail : "image/PINK.jpg",
        title : "PINK TEE LE",
        desc : "19.99$",
    },
    {
        thumnail : "image/PINK.jpg",
        title : "PINK TEE LE",
        desc : "19.99$",
    },
    
];
var card = '';
for ( let i in content){
    card += `
    
    <div class="col-4 ">
        <div class="card button-85" style="width: 18rem;">
            <img src="${content[i]['thumnail']}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${content[i]['title']}</h5>
                <p class="card-text">${content[i]['desc']}</p>
                <a href="#add" class="btn btn-primary">Add To Cart</a>
            </div>
        </div>
    </div>
    `;
    console.log(card)
    document.getElementsByClassName('row')[0].innerHTML = card;
}

var id = document.getElementById("id");
console.log(id);
var Name = document.getElementById("name");
console.log(Name);
var gender = document.getElementById("gender");
console.log(gender);
var salary = document.getElementById("salary");
console.log(salary);

document.getElementById("display_id").style.display = "none";
document.getElementById("display_name").style.display = "none";
document.getElementById("display_gender").style.display = "none";
document.getElementById("display_salary").style.display = "none";



function display(){

    document.getElementById("display_id").style.display = "block";
    document.getElementById("display_name").style.display = "block";
    document.getElementById("display_gender").style.display = "block";
    document.getElementById("display_salary").style.display = "block";

    document.getElementById("display_id").value = id.value;
    document.getElementById("display_name").value = Name.value;
    document.getElementById("display_gender").value = gender.value;
    document.getElementById("display_salary").value = salary.value;
    clear();
}
function clear(){
    id.vlaue = '';
    Name.vlaue = '';
    gender.vlaue = '';
    salary.vlaue = '';
    
}

