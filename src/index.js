console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', e => {

    //fetch dog pictures
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(response => response.json())
        .then(dogs => {
            dogs.message.forEach(dog =>{
                const img = document.createElement('img')
                img.style.height = '200px'
                img.style.margin = '10px'

                img.src = dog;

                document.getElementById('dog-image-container').appendChild(img)
            })
               
    })

    //list all the breeds

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            breeds = Object.keys(data.message);
            let breedList = document.getElementById('dog-breeds')

            for(dogName of breeds){
                const dogBreed = document.createElement('li')
                dogBreed.textContent = dogName

                breedList.append(dogBreed)
            }
        })

    // const breedsList = document.querySelectorAll('li')
    // changeListColor(breedsList)

    function changeListColor(li){   
        li.forEach(element => {
            li.addEventListener('click', () => {
                element.style.color = 'red'
            })
        })

    } 

})