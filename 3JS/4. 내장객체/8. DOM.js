// 버튼을 누르면 요소노드, 텍스트노드 만들고 버튼누르면 연결

//페이지가 로드(이벤트 발생)된 이후 함수 실행
window.onload = function(){

    // 버튼이 클릭되면 함수 실행
    btn1.addEventListener('click', function(){
        // 요소노드 생성
        let elementNode = document.createElement('h3');

        // 텍스트 노드 생성
        let textNode = document.createTextNode('안녕하세요!')

        // 연결(자식요소로 등록)
        elementNode.appendChild(textNode);

        //화면에 연결(div 연결)
        //부모요소의 맨 마지막 요소로 추가가 됨
        area1.appendChild(elementNode);

        area1.innerHTML +='<h3>innerHTML로도 가능!!</h3>';
    });
// =======================================================================


    // area2.appendChild(imgNode);
    // area2.innerHTML += '<img src="images/morning.jpg" width="150px" height="100px">';

// ===========================================================
// 이해안되서 한번 더 공부
btn3.addEventListener('click', function(e){
        area3.remove();
        
        // 이벤트가 발생한 요소
        let target = e.target;
        console.log(target);
        
        // 상위요소를 반환
        console.log(target.parentNode);
        
        // 상위 요소의 자식노드를 삭제
        let delNode = document.getElementById('area1');
        target.parentNode.removeChild(delNode);
    });
    
    // ===========================================================
    
    btn4.addEventListener('click', function(){
        // p 요소 생성
        let pNode = document.createElement('p');
        // text node 생성
        let textNode = document.createTextNode('신규노드 추가!');
        // 연결
        pNode.appendChild(textNode);
        // 부모요소 선택(body 선택)
        let body = document.querySelector('body');
        // 노드 선택 (삽입하고 싶은 위치의 요소를 선택) h1 선택
        let h1 = document.querySelector('h1');
        // insertBefore(추가할 요소, 추가할 위치의 요소) 
        //내가 선택한 자식요소 앞에다 삽입
        body.insertBefore(pNode, btn2);
        // 맨 아래에 삽입하려면 (btn2 앞에있던 문구가 맨 아래로 이동)
        body.appendChild(pNode);
    });



}