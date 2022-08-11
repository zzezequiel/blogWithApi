const apiURL = "http://localhost:3000/posts";
const userURL = " http://localhost:3000/users";
const commentsURL = "http://localhost:3000/comments";
const modalBody = document.querySelector(".modal-body")
const cont = document.getElementById('cont')



//posts

async function postAdd() {
    let postHTML = ''
    const res = await fetch(`${apiURL}`);
  const data = await res.json();
  data.forEach(post => {

    postHTML = `

             <div  data-bs-target="#exampleModal" class="col-5 ms-4 shadow p-3 mb-5 bg-body rounded">
             <h2>${post.title}</h2>
             <h5>${post.body}</h5>
             
             
             <div class="d-flex justify-content-between align-items-center align-self-end w-100">
             <a
               href="#"
               class="btn btn-dark"
               data-bs-toggle="modal"
               data-bs-target="#modalTemplate"
               data-id="${post.id}"
               >Read more</a
             >
           
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog">
               <div class="modal-content">
                 <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLabel" >${post.title}</h5>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div class="modal-body">
                 ${post.body}
                 </div>
                 <div class="modal-footer">
                 <button id="editPost" class="btn btn-success icon-pencil" data-edit="${post.id}" data-bs-toggle="modal" data-bs-target="#exampleModal2"></button>
                 <button id="deletePost" class="btn btn-danger icon-bin" data-delete="${post.id}"></button>
                 </div>
               </div>
             </div>
           </div>

            `;
    cont.innerHTML += postHTML;
  }); 

}

cont.addEventListener('click', async (e) => {
    let targetId = e.target.dataset.id
  
  
    if (targetId) {
      displayPostModal(targetId)
    }
})




  async function displayPostModal(targetId) {
    let post = await fetch(`${apiURL}/${targetId}`).then(response => response.json())
    let user = await fetch(`${userURL}/${targetId}`).then(response => response.json())
    let comments = await fetch(`${commentsURL}/${targetId}`).then(response => response.json())
  
    let modalHTML = `
    <div class="modal-header align-items-start">
      <h2 class="modal-title capitalize-text lh-sm" id="modalTitle">${post.title}</h2>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    
    <div id="modalBody" class="modal-body">
      <p class="capitalize-text">${post.body}</p>
      <div class="d-flex justify-content-center mx-1 my-2">
        
        <div class="d-flex flex-column">
          <h3 class="pb-3">Author</h3>
          <p>${user.name}</p>
          <a href="mailto:${user.email}">${user.email}</a>
        </div>
      </div>
      <div class="accordion accordion-flush" id="loadComments">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
          <button id="commentsBtn" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Show comments
          </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#loadComments">
          <div id="commentsContainer" class="accordion-body">
          
          <p>${comments.postId}</p>
          <p>${comments.id}</p>
          <p>${comments.name}</p>
          <p>${comments.email}</p>
          <p>${comments.body}</p>
        
         
          </div>

       
        </div>
      </div>
    </div>
    `
    document.getElementById('myModal').innerHTML = modalHTML
    document.getElementById('loadComments').addEventListener('click', () => loadComments(comments))
  }
  
 




postAdd()