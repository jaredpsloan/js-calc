/**
  * @author Jared Sloan
  * @author www.jaredpsloan.com
 * This program uses the php gd library to accept business card data submitted from the form on
 * index.html and creates a simple formatted business card, downloadable as a .jpeg */

//sets variables after loading the page

window.onload = function () {
  var keys = document.getElementsByClassName('key'),
      answer = document.querySelectorAll('.answer')[0],
      equals = document.getElementsByClassName('equals')[0],
      wipe = document.getElementsByClassName('wipe')[0];

    //adds a click event to all values in the key array
  for (var x = 0; x < keys.length; x++) {
     keys[x].addEventListener("click", add(x));
};


//adds the values entered into the answer div
  function add(x) {
    return function () {
      answer.innerHTML = answer.innerHTML + keys[x].innerHTML;
			}
    }

  // onclick function to wipe the answer div
  wipe.onclick = function () {
    answer.innerHTML = '';
  };


  //onclick function to evaluate the string of numbers and operators with an answer
   equals.onclick = function ()  {
    answer.innerHTML = eval(answer.innerHTML);
  }
}
