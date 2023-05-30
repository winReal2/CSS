// 등록하기 버튼이 클릭되면 json형식 문자열을 파싱해서 화면에 출력하기

// 파싱(parsing)
//  : (구문분석) 하나의 프로그램을 런타임 환경(ex) 브라우저 내 자바스크립트 엔진)이 
//      실제로 실행할 수 있는 내부 포맷으로 분석하고 변환하는 것!
//      파싱은 문서의 내용을 토큰(token)으로 분석하고, 문법적 의미와 구조를 반영한 
//      파스트리(parse tree)를 생성하는 과정!

// ======================================================
window.onload = function(){
    let register = document.querySelector('#register');
    
    // 버튼이 클릭되면 json형식 문자열을 파싱해서 화면에 출력하기
    register.addEventListener('click', function(e){

        // 배열형태로 들어있는것을 확인할 수 있음
        console.log(jsObj);
        
        // 기본이벤트(submit) 제거(화면이 전송되는 걸 막기위해)
        e.preventDefault();
        // 화면에 출력
        // console.log(jsObj);

        let tbody = document.querySelector('#attendant > tbody');

        // for문을 이용하여 배열에 들어있는 데이터를 출력하려면 
        //jsObj의 obj를 변경
        for(obj of jsObj){
            //테이블의 행을 생성
            let newTr = document.createElement('tr');
            //테이블의 한 칸을 생성
            let newTdName = document.createElement('td');
            newTdName.innerHTML = obj.name;
            let newTdMajor = document.createElement('td');
            newTdMajor.innerHTML = obj.major;
            let newTdGrade = document.createElement('td');
            newTdGrade.innerHTML = obj.grade;

            //행에 자식요소로 칸을 추가
            newTr.appendChild(newTdName);
            newTr.appendChild(newTdMajor);
            newTr.appendChild(newTdGrade);

            //테이블에 자식요소로 행을 추가
            tbody.appendChild(newTr);
        }
    });

}

//json형식의 문자열
//json형식의 문자열 + 배열
//[] 안에 json형식의 문자열을 , 를 이용하여 연결
// ※ jsonStr는 함수밖에서 선언되어 전역변수로 사용될 수 있다
    let jsonStr = `
    [
        {
        "name" : "도레미"
        , "major" : "컴퓨터공학"
        , "grade" : 2 
      }
      ,
      {
        "name" : "솔라시"
        , "major" : "컴퓨터공학"
        , "grade" : 2 
      }
      ,
      {
        "name" : "미파도"
        , "major" : "컴퓨터공학"
        , "grade" : 2 
      }
      ,
      {
        "name" : "시라미"
        , "major" : "컴퓨터공학"
        , "grade" : 2 
      }
    ]`

// 문자열을 jsObj로 변경 (파싱)
// 우리가 가져다 쓸 때에는 변환해서 사용해야함
    let jsObj = JSON.parse(jsonStr); 

    // jsObj를 문자열로 다시 변환하는 방법 (직면화)
    // JSON.stringify(jsObj)