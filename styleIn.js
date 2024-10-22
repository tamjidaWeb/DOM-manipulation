const sections = document.querySelectorAll('section');
// console.log(sections)
for(const section of sections){
    section.style.border = '1px solid red';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '5px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray'
}
const places = document.getElementById('places-container');
// places.style.backgroundColor = 'yellow'

const placeContainer = document.getElementById('places-container')
placeContainer.classList.add('text-center');
placeContainer.classList.remove('large-text');