document.getElementById('getJokeBtn').addEventListener('click', getJoke);

function getJoke() {
    document.getElementById('punchlineText').style.display = 'none';

    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            displaySetup(data.setup);
            setTimeout(() => displayPunchline(data.punchline), 5000);
        })
        .catch(error => console.error('Error fetching joke:', error));
}

function displaySetup(setup) {
    document.getElementById('setupText').textContent = setup;
}

function displayPunchline(punchline) {
    const punchlineText = document.getElementById('punchlineText');
    punchlineText.textContent = punchline;
    punchlineText.style.display = 'block';
}
