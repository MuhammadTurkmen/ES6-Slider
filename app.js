import people from './data.js'

const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

// set slides
container.innerHTML = people.map((person, slideIndex) => {
    const [img, name, job, text] = person
    // more logic later

    return `<article class="slide">
                <img src="https://www.course-api.com/images/people/person-3.jpeg" class="img" alt="peter doe">
                <h4>peter doe</h4>
                <p class="title">product designer</p>
                <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dicta perspiciatis assumenda officia dolor
                consequatur id obcaecati similique dolorum porro quasi!
                </p>
                <div class="quote-icon">
                <div class="fas fa-quote-right"></div>
                </div>
             </article>`
})