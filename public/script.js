document.getElementById('fetchData').addEventListener('click', () => {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = data.message;
        })
        .catch(error => console.error('Error:', error));
});
