window.onload = function(){
    // 만약 현재시간이 12시 이전이면 
    // images/morning.jpg

    // 12이후면 
    // images/afternoon.jpg

    let date = new Date();
    let hour = date.getHours();

    let container = document.querySelector('#container');
    // 이미지 노드 추가
    let imgNode = document.createElement('img');

    // 시간에 따라 이미지 경로 설정
    let imgSrc = (hour < 12) ? 'images/morning.jpg' : 'images/afternoon.jpg';

    // 이미지 속성 등록
    imgNode.src = imgSrc;

    // 컨테이너 박스의 자식으로 등록
    container.appendChild(imgNode);


    



}