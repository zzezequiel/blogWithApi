const apiURL = "http://localhost:3000/posts";
let main = document.getElementById('main');
let postCont = document.getElementById('postCont');
let ul = document.createElement('ul')
const section = `
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
</div>`;




        fetch(`${apiURL}`)
        .then(res=> res.json())
        .then(data => {
        data.forEach(data => {
            let element = document.createElement('li');
            element.appendChild(
                document.createTextNode(`${data.title}`)
                );
            ul.appendChild(element);
        });
        postCont.appendChild(ul);
    })

    



