
// ★★★★★자주사용★★★★★

// 페이지가 모두 불러져 왔으면 함수 실행
// onload  : 이벤트
window.onload = function(){
    //=========================풀이======================================

    // 버튼 요소 선택
    let btn = document.querySelector('#register');

    btn.addEventListener('click', function(e){

        // 버튼이 1개인 경우 submit 버튼으로 동작
        // 기본이벤트를 제거해야 submit으로 작동하지 않음
        e.preventDefault();

        //화면으로부터 입력된 값을 읽어옴
        //input 필드의 입력된 내용을 변수에 저장
        let userName = document.querySelector('#username').value;
        let major = document.querySelector('#major').value;

        // 중간에 확인하는 습관!
        // console.log('userNmae', userName);
        // console.log('major', major);

        //테이블이 여러개일때를 고려해 테이블의 아이디로 접근해서 tbody로 감
       let tbody = document.querySelector('#attendant > tbody');
        
        //테이블의 행을 생성
        let newTr = document.createElement('tr');
        //테이블의 한 칸을 생성
        let newTdName = document.createElement('td');
        //텍스트 값은 상단에 변수(userName)로 저장되어 있음
        newTdName.innerHTML = userName;
        let newTdMajor = document.createElement('td');
        newTdMajor.innerHTML = major;

        //행에 자식요소로 칸을 추가
        newTr.appendChild(newTdName);
        newTr.appendChild(newTdMajor);

        //테이블에 자식요소로 행을 추가
        tbody.appendChild(newTr);
        
        // 입력하고 등록하기 클릭하니까 글자가 사라짐(submit됨)
        // => 버튼에 있던 기존 이벤트 제거(이벤트 객체(e)를 받아와서 제거)




    });














    // ===========================내가 해본것===============================
    // btn1.addEventListener('click', function(){

    //     let trNode = document.createElement('tr');
    //     let tdNode = document.createElement('td');
    //     let tbody = document.querySelector('tbody');
    //     trNode.appendChild(tdNode);
    //     tbody.appendChild(trNode);


    //     let userName = document.querySelector('#container > #userInput > li > #username > value');
    //     let tdName = document.querySelector(tdNode);
    //     userName.appendChild(tdName);
    //     tdName.appendChild(tdNode);


        // tdName.insertBefore(userName, td);
    // });






}