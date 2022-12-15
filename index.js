// import dogs from './data.js'
// import Dog from './Dog'

import { fdatasync } from "fs"

// const dogsToShow = [teddy, rex, bella]
// let dogInfo = document.getElementById("dog-info")

// function getNewDog() {
//     const newDogData = dogs[dogsToShow.shift()]
//     return newDogData ? new Dog(newDogData) : {}
// }


// function render() {
//     dogInfo.innerHTML = text
// }


/*Buttons logic */

document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("main-section").innerHTML = `<div class="bark-section">
    <div class="woof">
    <div class="dialog-box">
    </div>
    <div>
    <div class="triangle">
    </div>
    <h1>¡Woof!</h1>
    </div>
    <div class="barking-dog">
        <div class="head">
            <div class="eyes">
                <div class="eye">
                    <div class="pupil"></div>
                </div>
                <div class="eye">
                    <div class="pupil"></div>
                </div>
            </div>
        </div>

        <div class="mouth">
            <div class="mouth-bottom"></div>
            <div class="tongue">
                <div class="tongue-line"></div>
            </div>
            <div class="mouth-top">
                <div class="mouth-top-circle left"></div>
                <div class="mouth-top-circle right"></div>
            </div>

        </div>
        <div class="nose"></div>
        <div class="ears">
            <div class="ear ear-left"></div>
            <div class="ear ear-right"></div>
        </div>
    </div>

    <div class="loading-bar">
        <div class="loading-circles-bar">
            <div class="circle-loading"></div>
            <div class="circle-loading"></div>
            <div class="circle-loading"></div>
        </div>
        <h3>Loading</h3>

    </div>`

    const myTimeOut = setTimeout(() => {
        document.getElementById("main-section").innerHTML = `<section class="dog-info-section" id="dog-section">
        <div id="dog-info">
            <div id="dog-text">
                <h1 id="dog-name-age">Teddy, 30</h1>
                <p id="dog-bio">"How you doin?"</p>
            </div>
        </div>
    </section>

    <section class="button-section">
        <div id="no-button" class="like-button nope-button">
            <img src="img/icon-cross.png" class="button-img">
        </div>
        <div id="yes-button" class="like-button yep-button">
            <img src="img/icon-heart.png" class="button-img">
        </div>
    </section>`

        console.log("working")
        let yesButton = document.getElementById("yes-button")
        let notButton = document.getElementById("no-button")
        let text = ""
        yesButton.addEventListener("click", function() {
            text = renderBadge("yes")
            dogInfo.innerHTML = text
        })

        notButton.addEventListener("click", function() {
            text = renderBadge("nope")
            dogInfo.innerHTML = text
        })
    }, 3000)
})

let dogInfo = document.getElementById("main-section")
console.log(dogInfo)

function renderBadge(liked) {
    if (liked === "yes") {
        return `<div class="dog-info-section-badge" id="dog-info">
        <img src="img/badge-like.png" class="like-icon">
        <div id="dog-text">
        <h1 id="dog-name-age">Teddy 30</h1>
        <p id="dog-bio">"How you doin?"</p>
        </div>
        </div>
        <section class="button-section">
    <div id="no-button" class="like-button nope-button">
        <img src="img/icon-cross.png" class="button-img">
    </div>
    <div id="yes-button" class="like-button yep-button">
        <img src="img/icon-heart.png" class="button-img">
    </div>
</section>`

    } else if (liked === "nope") {
        return `<div class="dog-info-section-badge" id="dog-info">
        <img src="img/badge-nope.png" class="like-icon">
        <div id="dog-text">
        <h1 id="dog-name-age">Teddy 30</h1>
        <p id="dog-bio">"How you doin?"</p>
        </div>
        </div>
        <section class="button-section">
    <div id="no-button" class="like-button nope-button">
        <img src="img/icon-cross.png" class="button-img">
    </div>
    <div id="yes-button" class="like-button yep-button">
        <img src="img/icon-heart.png" class="button-img">
    </div>
</section>`
    }
}

let text = `<div id="dog-picture">
<h1 id="dog-name-age">Teddy, 30</h1>
<p id="dog-bio">"How you doin?"</p>
</div>`