const apiURL = "http://localhost:3000/posts";
const modalBody = document.querySelector(".modal-body")



     fetch(`${apiURL}`)
        .then(res=> res.json())
        .then(data => {
        data.forEach(post => {
            let divcont = document.createElement('div')
            //userID
            /*let users = document.createElement('h3');
            users.appendChild(
                document.createTextNode(`${post.userId}`)
            );
            divcont.appendChild(users);

            //id
            let ids = document.createElement('h5');
            ids.appendChild(
                document.createTextNode(`${post.id}`)
            );
            divcont.appendChild(ids);*/

            //title

            let element = document.createElement('h3');
            element.appendChild(
                document.createTextNode(`${post.title}`)
                
                );
            divcont.setAttribute("data-bs-toggle","modal")
            divcont.setAttribute("data-bs-target","#staticBackdrop")
            divcont.appendChild(element);

            //body

            let content = document.createElement('p');
            content.appendChild(
                document.createTextNode(`${post.body}`)
            );
            divcont.appendChild(content);
            main.appendChild(divcont);
        });
        
    }) 




//users information
const usersApi = "http://localhost:3000/users";
fetch(`${usersApi}`)
.then(res => res.json())
.then(data => {
    data.forEach(usernames => {
        let container = document.createElement('div')

        let element = document.createElement('h3');
        element.appendChild(
            document.createTextNode(`${usernames.id}`)
        );
        container.setAttribute("data-bs-toggle","modal")
        container.setAttribute("data-bs-target","#staticBackdrop")
        container.appendChild(element);

        let names = document.createElement('p');
        names.appendChild(
            document.createTextNode(`${usernames.username}`)
        );
        container.appendChild(names);
        main.appendChild(container);
    })
})















