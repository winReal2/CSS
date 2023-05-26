
window.onload = function(){
    // <p>Java</p>
    // <p>Oracle</p> 
    // <p>JSP/Servlet</p>
    // <p>SPRING</p>
    btn1.addEventListener('click', function(){
        // 쇼핑몰 장바구니 옆 추가 삭제 버튼 에 사용

    //     let javaNode = document.createElement('p');
    //     let javaTextNode = document.createTextNode('Java');
    //     //텍스트 노드를 자식노드로 등록
    //     javaNode.appendChild(javaTextNode);
    
    //     //body는 부모요소, 부모요소 선택
    //     let body = document.querySelector('body');
    //     // 삽입할 위치의 요소 선택
    //     let p = document.querySelector('p');

    //     // 요소를 선택한 요소의 앞에 삽입
    //     body.insertBefore(javaNode, p);
    
    //     // querySelector / querySelectorAll 의 차이확인

    // // =======================================================
    //     let oracleNode = document.createElement('p');
    //     let oracleTextNode = document.createTextNode('Oracle');
    //     oracleNode.appendChild(oracleTextNode);
    //     body.insertBefore(oracleNode, p)
    
    //     // let body1 = document.querySelector('body');
    //     // let p2 = document.querySelectorAll('p')[1];
    //     // body.insertBefore(oracleNode, p2);


    //     let jspNode = document.createElement('p');
    //     let jspTextNode = document.createTextNode('Jsp/Servlet');
    //     jspNode.appendChild(jspTextNode);
    //     body.appendChild(jspNode);


    //     let springNode = document.createElement('p');
    //     let springTextNode = document.createTextNode('spring');
    //     springNode.appendChild(springTextNode);
    //     body.appendChild(springNode);


    let javaNode = document.createElement('li');
    let javaTextNode = document.createTextNode('java');
    javaNode.appendChild(javaTextNode);

    let items = document.querySelector('#items');
    let li = document.querySelectorAll('li')[0];
    items.insertBefore(javaNode, li);


    let oracleNode = document.createElement('li');
    let oracleTextNode = document.createTextNode('oracle');
    oracleNode.appendChild(oracleTextNode);
    items.insertBefore(oracleNode, li);
    
    
    let jspNode = document.createElement('li');
    let jspTextNode = document.createTextNode('JSP/Servlet');
    jspNode.appendChild(jspTextNode);
    items.appendChild(jspNode);
    
    let springNode = document.createElement('li');
    let springTextNode = document.createTextNode('spring');
    springNode.appendChild(springTextNode);
    items.appendChild(springNode);

    });

  }