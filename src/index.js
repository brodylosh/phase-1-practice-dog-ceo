console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const ul = document.getElementById('dog-breeds')
    const li = document.createElement('li')
    fetch(imgUrl)
    .then(obj => obj.json())
    .then(data => ul.appendChild(li.textContent(data)))
    
    
    
    
    

  });