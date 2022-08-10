const apiURL = "http://localhost:3000/posts";
let main = document.getElementById('main');
let postCont = document.getElementById('postCont');
let ul = document.createElement('ul');




/* const section = `
<div class="accordion" id="accordionExample">
    <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div id="postCont" class="accordion-body">
     
                </div>
            </div>
    </div>
</div>`; */




      /*   fetch(`${apiURL}`)
        .then(res=> res.json())
        .then(data => {
        data.forEach(data => {
            let element = document.createElement('h3');
            element.appendChild(
                document.createTextNode(`${data.title}`)
                );
            ul.appendChild(element);

            let users = document.createElement('h3');
            users.appendChild(
                document.createTextNode(`${data.body}`)
            );
            ul.appendChild(users);
        });
        postCont.appendChild(ul);
    })  */







     fetch(`${apiURL}`)
        .then(res=> res.json())
        .then(data => {
        data.forEach(data => {

            //userID
            let users = document.createElement('h5');
            users.appendChild(
                document.createTextNode(`${data.userId}`)
            );
            ul.appendChild(users);

            //id
            let ids = document.createElement('h5');
            ids.appendChild(
                document.createTextNode(`${data.id}`)
            );
            ul.appendChild(ids);

            //title

            let element = document.createElement('h3');
            element.appendChild(
                document.createTextNode(`${data.title}`)
                );
            ul.appendChild(element);

            //body

            let content = document.createElement('h3');
            content.appendChild(
                document.createTextNode(`${data.body}`)
            );
            ul.appendChild(content);
        });
        postCont.appendChild(ul);
    }) 



    






/*     
fetch(`${apiURL}`)
.then(res => res.json())
.then(data => {
    data.forEach(data => {
        let bucle = document.createElement('div');
        bucle.appendChild(
            document.createTextNode(`${data.title}`)
        );
        div.appendChild(bucle);
    });
    postCont.appendChild(div);
})
     */


