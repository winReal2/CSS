

window.onload = function(){
    
    //고전 이벤트 모델

    //이벤트가 발생한 요소는 내부적으로 이벤트 발생정보를 담고 있는 객체를 매개변수로 전달한다
    //이벤트의 발생 정보를 확인하고 싶다면 매개변수(e)를 입력
    btn1.onclick = function(e){
        console.log('고전 이벤트 모델', this);
        console.log('이벤트', e);

        console.log(e.target);  // 이벤트가 발생한 대상  (콘솔에서 버튼이 그 대상임을 확인할 수 있음)
        console.log(e.button);  // 마우스 키값 반환
        console.log(e.clientX);  // 이벤트가 발생한 가로위치
        console.log(e.clientY);  // 이벤트가 발생한 세로위치
        console.log(e.ctrlKey);  // ctrl키가 눌렸는지
        console.log(e.shiftKey);  // shift키가 눌렸는지
        console.log(e.timeStamp);  // 이전 이벤트와 현재 이벤트가 발생한 시간의 차이를 밀리세컨드로 반환
        
        console.log(e.code);  // 키보드 키코드값 (키코드가 13번이면 엔터키)
        console.log(e.key);   // 키보드 키

    }


    // (화살표함수도 이벤트객체 전달됨)

    // 고전방식으로 이벤트를 적용할 경우
    // 버튼의 온클릭이라는 속성에 값을 주는 것이기떄문에 중복적용 불가능 (즉 덮어쓰기된다(나중에 온 함수가 살아남음))
    btn1.onclick = (e) => {
        // 화살표함수에서는 this가 없음(arguments, super도 없음)
        // 화살표 함수의 상위 요소의 this를 찾아서 반환
        console.log('this : ', this);   // 콘솔창에 window는 최상위 객체
        console.log('e : ', e.target);  
    }

// ==================================
    //함수옆에 괄호를 넣으면 바로 실행되어버림
    btn3.addEventListener('click', clickEventHandler);
    btn3.addEventListener('mouseenter', function(){
        // this. 하면 버튼이 선택됨
        this.style.backgroundColor = 'red';
    });
    btn3.addEventListener('mouseleave', (e)=>{
        // e.target : 이벤트가 발생한 요소
        e.target.style.backgroundColor = 'green';
    });

    

    //이벤트 처리기 = 이벤트 핸들러 : 이벤트가 발생했을 때 처리하는 함수
    function clickEventHandler(){
        console.log('표준 이벤트 모델');
    }
// ===============================================================
// 2. 이벤트가 발생한 요소 객체에 접근하는 방법 (★★★★★)
// 1) 고전 이벤트 방식
btn4.onclick = function(e){
    // 어떤 요소가 발생시켰는지 알려면 (다양한 방법)
    console.log('e.target', e.target);
    console.log('this', this);
    console.log('window.event.target', window.event.target);
}    

//화살표 함수에서는 this가 가리키는 대상이 다르다
btn4.onclick = (e) =>{
    console.log('e.target', e.target);
    // 이벤트 발생요소가 아님!
    console.log('this', this);  
    console.log('window.event.target', window.event.target);
}    

// 3) 표준 이벤트 모델
btn5.addEventListener('click', function(e){
    console.log('e.target', e.target);
    console.log('this', this);
    console.log('window.event.target', window.event.target);
});

btn5.addEventListener('click', (e) => {
    console.log('=========================');
    console.log('e.target', e.target);
    // console.log('this', this);
    console.log('window.event.target', window.event.target);
});

// ============================================

submit.addEventListener('click', function(e){
    
    // 정규식 (많이 사용됨)
    // 특정 규칙을 가진 문자열을 검색하거나 치환할 때 사용하는 형식 언아
    // /패턴/ 으로 선언
    // /정규식패턴/.test('문자열')
    // 문자열에 정규식 패턴을 만족하는 값이 있으면, true, 없으면 false를 리턴한다

    let regExp = /^[a-zA-Z0-9]{5,12}$/;

    let userId = document.getElementById('userId').value;
    // ^ : 시작
    // [] : [...] 내의 문자들 중 하나라도 존재
    // {m,n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다.
    // $ : 끝
    
    // 패턴을 만족하지 않으면
    if(!regExp.test(userId)){
    alert('아이디는 영문자, 숫자로만 총 5~12자 사이로 입력해주세요');
    // 표준이벤트 방식에서는 (이벤트 객체가 있는경우)
    // 이벤트 객체의 preventDefault()함수를 이용하여 기본이벤트를 제거할 수 있다
    e.preventDefault();
    }
});


}

// 2) 인라인 방식에서 이벤트가 발생한 요소를 확인하는 방법
function test(e){
    // 매개값으로 이벤트 객체를 가져올 수 없다!
    // console.log('e', e);  //undefined
    // console.log(this); //window객체를 가리킴 그래서 얘도 안됨
    console.log(window.event.target);
}

function passwordCheck(){
    //비밀번호, 비밀번호 확인을 비교하여 일치하지 않는 경우 '비밀번호가 일치하지 않습니다' 메세지 처리
    //일치하지 않는 경우 return false 처리
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;
    
    
    if(pass1 !== pass2){
        alert('비밀번호가 일치하지 않습니다');
        return false;
    }
}

