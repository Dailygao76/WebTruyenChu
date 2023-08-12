
var imgfeature = document.querySelector('.img-feature');
var prevbtn = document.querySelector('.prev');
var nextbtn = document.querySelector('.next');
var list_img = document.querySelectorAll('.list-img img');
var totalImages = list_img.length;

var currentindex = 0;

function updateImg(index){
    currentindex = index;
    imgfeature.src = list_img[index].getAttribute('src');
    document.querySelector('.image-count').textContent = `${index + 1}/${totalImages}`;
}

prevbtn.addEventListener('click',e => {
    if(currentindex == 0){
        currentindex = list_img.length - 1
    }else{
        currentindex--
    }
    updateImg(currentindex);
})

nextbtn.addEventListener('click' ,e => {
    if (currentindex === list_img.length - 1) {
        currentindex = 0;
    } else {
        currentindex++;
    }
    updateImg(currentindex);
})


list_img.forEach((imgElement,index)=>{
    imgElement.addEventListener('click',e=>{
        updateImg(index);
    })
})
    

updateImg(0);
