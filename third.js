const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1> my dynamic sectionnn </h1>
    <p> Extra text added inside the paragraph</p>
    <ul>
        <li> first item</li>
         <li> second item</li>
          <li> third item</li>
           <li> fourth item</li>
           </ul>
`

main.appendChild(section);