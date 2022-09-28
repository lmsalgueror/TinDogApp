import dogs from './data.js'
import Dog from './Dog'

const dogsToShow = [rex, bella, teddy]

function getNewDog() {
    const newDogData = dogs[dogsToShow.shift()]
    return newDogData ? new Dog(newDogData) : {}
}

let text = `<div id="dog-picture">
<h1 id="dog-name-age">${name},${age}</h1>
<p id="dog-bio">"How you doin?"</p>
</div>`