var obj = {
  name: 'hello',
  helpme: 'thank you',
  sayHello: function(){
    console.log("hello," + obj.name);
  },
  imBadAtMath: function(a,b) {
    return a * b;
  }
}

function something() {
  console.log(obj);
  var otherObj = {
    name: 'otherObject',
    age: 34,
    gender: 'male'
  }
  console.log(otherObj);
  //This var 'otherObj' is only accessible within this function
}
something();

//Below are some more useful 'Event' types in jquery:
//.hjover
//.onscroll
//.mouseover
//.mouseleave
//.hover


// $('body').on('scroll', function () {
//   { $('body').css('background-color', 'red') });
// });

$('.menu-item').on('mouseover'), function(event) {$(this).children('a').css('font-size', '20px') });
$('.menu-item').on('mouseleave'), function(event) {$(this).children('a').css('font-size', '12px') });

$('form').on('keypress', function() { console.log($(this).find('input').val) });
