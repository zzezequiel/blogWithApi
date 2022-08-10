var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var userBtn = document.getElementById("userBtn");
var commentBtn = document.getElementById("commentBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";

  const apiURL = "http://localhost:3000/posts";
  fetch(`${apiURL}`)
     .then(res=> res.json())
     .then(data => {
     data.forEach(post => {

        let content = document.getElementById('content');
           //userID
          let users = document.createElement('h3');
           users.appendChild(
               document.createTextNode(`${post.userId}`)
           );
           content.appendChild(users);
        //ID
        let ids = document.createElement('h3');
        ids.appendChild(
            document.createTextNode(`${post.id}`)
        );
        content.appendChild(ids);

        //title
        let titles = document.createElement('h3');
        titles.appendChild(
            document.createTextNode(`${post.title}`)
        );
        content.appendChild(titles);

        //body

        let bodys = document.createElement('h3');
        bodys.appendChild(
            document.createTextNode(`${post.body}`)
        );
        content.appendChild(bodys);

     })
    })

}

userBtn.onclick = function() {
    modal.style.display = "block";

const userUrl = "http://localhost:3000/users";
fetch(`${userUrl}`)
.then(res => res.json())
.then(data => {
    data.forEach(users => {
        let contentUsers = document.getElementById('contentUsers');

        //ids
        let user = document.createElement('h3');
        user.appendChild(
            document.createTextNode(`${users.id}`)
        );
        contentUsers.appendChild(user);

        //username
        let names = document.createElement('h3');
        names.appendChild(
            document.createTextNode(`${users.username}`)
        );
        contentUsers.appendChild(names);

        //email
        let emails = document.createElement('h3');
        emails.appendChild(
            document.createTextNode(`${users.email}`)
        );
        contentUsers.appendChild(emails);


    })
})

}

commentBtn.onclick = function() {
    modal.style.display = "block";

    const commentsUrl = "http://localhost:3000/comments";
    fetch(`${commentsUrl}`)
    .then(res => res.json())
    .then(data => {
        data.forEach(comments => {

            let coments = document.getElementById('contentComents');

            //postId
            let postid = document.createElement('h3');
            postid.appendChild(
                document.createTextNode(`${comments.postId}`)
            );
            coments.appendChild(postid);

            //id
            let iDs =document.createElement('h3');
            iDs.appendChild(
                document.createTextNode(`${comments.id}`)
            );
            coments.appendChild(iDs);

            //name
                let naMes = document.createElement('h3');
                naMes.appendChild(
                    document.createTextNode(`${comments.name}`)
                );
                coments.appendChild(naMes);

            //email
            let Email = document.createElement('h3');
            Email.appendChild(
                document.createTextNode(`${comments.email}`)
            );
            coments.appendChild(Email);
            
            //body
            let Bodys = document.createElement('h3');
            Bodys.appendChild(
                document.createTextNode(`${comments.body}`)
            );
            coments.appendChild(Bodys);
        })
    })

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







