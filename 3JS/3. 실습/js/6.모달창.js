window.onload = function(){
/* 내부함수 (외부에서 호출불가능)
    function test(){
        console.log('test');
    }
*/
    // window.open / window.close : 윈도우객체의 내장함수!
    // 즉, 아이디로 참조불가하기 때문에 직접 변수에 담아줘야 함!
    // #open : 모달창 보여주기
    // #close : 모달창 닫기

    let open = document.getElementById('open');
    let close = document.getElementById('close');
    // 특수문자가 입력되서 아이디로 바로 접근이 안됨 그래서 변수에 담아줌
    let modal = document.getElementById('modal-box'); 

    open.addEventListener('click', function(){
        //모달창 열기
        // class 속성에 active 추가
        //그 전에 모달창 먼저 선택!
        modal.classList.add('active');
    });

    close.addEventListener('click', function(){
        //모달창 닫기
        //class 속성 active 제거
        modal.classList.remove('active');
    });
}


function test(){
    console.log('test');
}