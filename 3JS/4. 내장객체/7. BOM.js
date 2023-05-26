window.onload = function(){

    // open
    btn1.addEventListener('click', function(){
        // window.open(); // 새 탭
        // window.open('http://www.naver.com'); //새탭이 열리고 괄호 안에 지정한 url로 이동
        // window.open('http://www.naver.com', 'naver'); // open('url', '창이름')
        
        // open(url, 창이름, '속성')
        window.open('7. BOM.html', 'BOM', 'width=500, height=500');  //팝업창처럼 뜬다
    });


    // 타이머 관련 메소드
    // window.setTimeout()
    btn2.addEventListener('click', ()=>{
        //3초 종료 취소를 위해 timerId 변수 선언 및 초기화
        let timerId = 0;

        // 새창 띄우기  (윈도우 객체를 newWindow에 저장)
        let newWindow = window.open();
        newWindow.alert('3초 후에 이 페이지는 종료됩니다');

        //setTimeout(콜백함수, 시간)
        //일정시간 후 콜백함수 한번만 실행
        timerId = window.setTimeout(function(){
            newWindow.close();
        }, 3000);
        
        // 3초안에 종료되는 것을 취소하고 싶으면 변수에 저장(timerId)
        // 타이머 id를 clearTimeout()함수에 전달하면 해당 id의 타이머를 취소할 수 있다
        clearTimeout(timerId);
    });
    
    // 타이머 관련 메소드
    // window.setInterval()

    let timerId = 0;
    btnStart.addEventListener('click', function(){
        
        // 일정시간 마다 콜백함수 반복 실행
        // window.setInterval(함수, 시간)
        // 반환된 숫자값(식별값)을 이용해 종료시켜 줄 수 있다
        // 다시말해, 반환된 숫자값을 clearInterval, clearTimeout에 넣어주면 종료시킬 수 있다
       timerId = window.setInterval(function(){
            // new Date객체(현재날짜,시간정보 담긴 객체)로 현재 날짜와 시간 반환
            let date = new Date();
            // date.toTimeString();출력을 위해 area1.innerHTML에 전달
            // toTimeString : 사람이 읽을 수 있는 형식의 문자열로 시간을 반환
            // area1.innerHTML = date.toTimeString();

            // 시,분,초를 따로 가져오고 싶으면,
            area1.innerHTML 
            = `${date.getHours()} : ${date.getMinutes()} ` 
                + `: <span id='second'> ${date.getSeconds()} </span>`
        }, 1000);

        // 실행 누를때마다 콘솔창에 timerId 값 증가
        console.log('timerId', timerId);
    });


    btnStop.addEventListener('click', function(){
        // 반환하는 값을 저장해서 가져와야함
        // timerId는 함수 밖에서 선언
        clearInterval(timerId);

    });

// ===============================================

    btn3.addEventListener('click', ()=>{
        area3.innerHTML = '<h4> location 객체 <h4> ';

        for(key in location){
            // console.log('key : ', key);
            // 객체[속성]
            // 객체.속성
            // 문자열은 ''감싸져 있어서 . 이 아니라 [ ]대괄호를 이용!
            // console.log('value : ', location[key]);
            area3.innerHTML +=
                `key : ${key}, value : ${location[key]}<br>`;  
        }
    });

}
