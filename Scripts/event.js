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

document.getElementById('post').addEventListener('click',function(){
   const commentText= document.getElementById('comment-box');
   const commentValue= commentText.value;
   console.log(commentValue);



   const comment-container= '';
})

