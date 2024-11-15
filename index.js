// look back at the <readme.md> file for some hints //
// working API key //
document.addEventListener("DOMContentLoaded", function () {


    const submitButton = document.getElementById('submitButton');
    const input = document.getElementById('inputValue');
    const displayDiv = document.getElementById('giphyDisplay');
    const removeButton = document.getElementById('removeButton');

    const apiKey = 'zHdzxWL4ukNaqIhgEst0YFJszRJV3RwO';

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        let searchTerm = input.value;
        giphyRequest(searchTerm);
    });

    removeButton.addEventListener('click', function (event) {
        if (displayDiv) {
            displayDiv.innerHTML = null;
        }
    });

    async function giphyRequest(searchTerm) {
        const response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`);
        // create a new <div> for each giphy
        let newDiv = document.createElement('div');
        //set the giphy in the new div 
        newDiv.innerHTML = `<img src="${response.data.data[0].images.fixed_height.url}" alt="Giphy Image!">`;
        displayDiv.appendChild(newDiv);

        console.log(response);
    }

});