document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    fetch('data.json')
    .then(response => response.json())
    .then(jsonData => parseJson(jsonData))
    .catch(error => 
        {
            console.error('Error:')
            console.error(error);
        })
    });
    console.log('after promises');

function parseJson(jsonData) {
    console.log('Parsing JSON');
    let conDiv = document.getElementById('smthng');
    jsonData.research.forEach(research => {
        let researchDiv = document.createElement('div');
        let h1Tag = document.createElement('h1');
        let pTag = document.createElement('p');
        pTag.textContent = research.content;
        h1Tag.textContent = research.sds;
        conDiv.appendChild(researchDiv);
        researchDiv.appendChild(h1Tag);
        researchDiv.appendChild(pTag);
        console.log('researchDiv');
    });
}
