document.addEventListener('DOMContentLoaded'), () => {
    console.log('DOM loaded');
    fetch('figures.json')
    .then(response => response.json())
    .then(jsonData => parseJson(jsonData))
    .catch(error => 
        {
        console.error('Error:')
        console.error(error);
        })
    }
    console.log('after promises');

function parseJson(jsonData) {
    console.log('Parsing JSON');
    let conDiv = document.getElementById('content');
    jsonData.internet_figures.forEach(figure => {
        let figureDiv = document.createElement('div');
        let h2Tag = document.createElement('h2');
        let pTag = document.createElement('p');
        let rtage = document.createElement('r');
        let ytag = document.createElement('y');
        ytag.textContent = figure.year_active;
        rtage.textContent = figure.impact;
        pTag.textContent = figure.role;
        h2Tag.textContent = figure.name;
        conDiv.appendChild(figureDiv);
        figureDiv.appendChild(h2Tag);
        figureDiv.appendChild(pTag);
        figureDiv.appendChild(rtage);
        figureDiv.appendChild(ytag);
        console.log('figureDiv');
    });
}
