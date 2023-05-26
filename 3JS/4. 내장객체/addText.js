window.onload = function(){
    
    
    //container, order, orderInfo
    // id가 있어서 접근안해도 되지만 접근해봄
    let container = document.querySelector('#container');
    let order = document.querySelector('#order');
    let orderInfo = document.querySelector('#orderInfo');
    
    order.addEventListener('click', function(){
        let p = document.createElement('p');
        // 컨테이너 박스에 있는 h2를 넣고 싶으니까 먼저 선택
        let innerText = document.querySelector('#container > h2').innerText;
        let textNode = document.createTextNode(innerText);
        
        p.appendChild(textNode);

        p.style.fontSize = '0.8em';
        p.style.color = 'blue';
        p.style.fontWeight = '800';

        orderInfo.appendChild(p);

        

    });

}