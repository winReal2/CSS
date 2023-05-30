// 요소추가 및 시간설정★★★★★

window.onload = function(){
//======================같이 푼것==============================
    
    const bttn = document.querySelector('#bttn');
    const notiBox = document.querySelector('#noti-box');

    bttn.addEventListener('click', function(){
        // 버튼이 클릭되면 notiBox에 새로운 알림을 추가하려고 함
        let noti = document.createElement('div');
        //클래스 속성 추가(css에 설정된 디자인 입혀줌)
        noti.classList.add('noti');    
    
        noti.innerHTML = '알림 내용 표시!!!';

        // 화면에 출력하기 위해 자식요소로 등록
        notiBox.appendChild(noti);


        // 몇 초 있다가 사라지려면 setTimeout() 하면됨
        setTimeout(function(){
            // 요소 삭제
            noti.remove();
        }, 2000);
        
    });



//======================내가 한것===============================

    // bttn.addEventListener('click', function(e){

    //     e.preventDefault();

    //     let notiBox = document.querySelector('#noti-box');
    //     let divBox = document.createElement('div');
    //     divBox.style.height = '50px';
    //     //클래스 이름 추가
    //     divBox.classList.add('noti');
    //     // 아이디로 추가하려면 setAttribute 사용!
    //     // divBox.setAttribute('id', 'noti');
    //     let textDiv = document.createTextNode('알림내용 표시');

    //     divBox.appendChild(textDiv);
    //     notiBox.appendChild(divBox);
    //     body.appendChild(notiBox);
        
    // });

}
