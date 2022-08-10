
 const url = fetch('http://localhost:3000/posts/')
 

fetch(`$(url)`)
    .then(rest => rest.json())
    .then(data => {
        data.forEach(data => {
            let element
        });

