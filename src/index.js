console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
  dogImage()
  loadingBreeds()

});
// when DOM is loaded.. do this


function dogImage(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(images => {
  images.message.forEach(image => loadingImage(image))
  } )

function loadingImage(dogUrl){
  var _img = document.getElementById('dog-image-container')
  var newImg = new Image
  newImg.src = dogUrl
  _img.appendChild(newImg)
}
}

 function loadingBreeds(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    var dogBreeds = document.getElementById('dog-breeds')

  fetch(breedUrl)
  .then(resp => resp.json())
  .then(breeds => {
      Object.keys(breeds.message).forEach(function(dogBreed){
        //array getting the keys from array. and then using for each function
        var node = document.createElement("LI")
        node.innerHTML = dogBreed
        dogBreeds.appendChild(node)
        //appending to the UL
        node.addEventListener("click", changeColor)
        //element is being listened on by the event listener. and changes the color.

      })
      // foreach, has a function to do something with that breed
  })
}

//when they click on a breed, it changes color
function changeColor(){
  document.body.style.color = "purple"
  return false;
}

//use the drop bar to filter out.
// if user selects 'a' filter out breeds to match the first letter.

function myFunction() {
  var e, input, filter, i, ul, li;

  e = document.getElementById("breed-dropdown");
  input = e.options[e.selectedIndex].value;
  filter = input.toUpperCase();
  ul = document.getElementById("dog-breeds");
  li = ul.getElementsByTagName('li');

  // table = document.getElementById("myTable");
  // tr = table.getElementsByTagName("tr");
  for (i = 0; i < li.length; i++) {
    var listText = li[i];
    var txtValue = listText.textContent || listText.innerText;

    if (txtValue[0].toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
      }

  }
}
