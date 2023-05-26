window.onload = function(){

    
    btn1.addEventListener('click', function(){

        let trNode = document.createElement('tr');
        let tdNode = document.createElement('td');
        let tbody = document.querySelector('tbody');
        trNode.appendChild(tdNode);
        tbody.appendChild(trNode);


        let userName = document.querySelector('#container > #userInput > li > #username > value');
        let tdName = document.querySelector(tdNode);
        userName.appendChild(tdName);
        tdName.appendChild(tdNode);


        // tdName.insertBefore(userName, td);
    });




}