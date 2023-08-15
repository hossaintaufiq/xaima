function makeYellow(){
    document.body.style.backgroundColor = 'yellow';

}
function makeBlue(){
    document.body.style.backgroundColor = 'blue';

}

const makePurple =document.getElementById('Idk');
makePurple.onclick= purple;

function purple(){
    document.body.style.backgroundColor ='purple';
}


const makePink = document.getElementById('who');

makePink.onclick=pink;

function pink(){
    document.body.style.backgroundColor='pink';
}

// text change

document.getElementById('name-button').addEventListener('click',function(){
    const changeName = document.getElementById('name');
    changeName.innerText='Xaima Zaman';


}
)

document.getElementById('btn-post').addEventListener('click',function(){
   const commentBox= document.getElementById('comment-box');
   const newComment = commentBox.value;


   const commentContainer = document.getElementById('comment-container');
   const p = document.createElement('p');

   p.innerText=newComment;
   commentContainer.appendChild(p);
 commentBox.value='';
//    console.log(newComment);
//    const commentValue= commentText.value;
//    console.log(commentValue);



//    const commentContainer= '';
})

