// About button
const aboutButton = document.querySelector("#about-button")
const aboutSection = document.querySelector("#about")

if(aboutButton){
    aboutButton.addEventListener("click", function(){
        aboutSection.scrollIntoView({behavior: 'smooth'});
    })
}

// Study button
const studyButton = document.querySelector("#study-button")
const studySection = document.querySelector("#study")

if(studyButton){
    studyButton.addEventListener("click", function(){
        studySection.scrollIntoView({behavior: 'smooth'});
    })
}

// More button
const moreButton = document.querySelector("#more-button")
const moreSection = document.querySelector("#more")

if(moreButton){
    moreButton.addEventListener("click", function(){
        moreSection.scrollIntoView({behavior: 'smooth'});
    })
}

// Study button
const projectsButton = document.querySelector("#projects-button")
const projectsSection = document.querySelector("#projects")

if(projectsButton){
    projectsButton.addEventListener("click", function(){
        projectsSection.scrollIntoView({behavior: 'smooth'});
    })
}