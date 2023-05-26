
window.onload = function(){
    //console.log('test');
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', function(){
        //console.log('addEvent');
        test();
    });
    console.log(btn1);
    console.log(btn2);
    // 익명의 함수 : 변수에 대입하거나 함수실행시 인수로 사용할수 있다
    btn2.addEventListener('click', function(){
        alert('익명의 함수 실행(이벤트 핼들러를 통해 실행!)')
    });

    // let btn3 = document.getElementById('btn3');
    // btn3.addEventListener('click', ()=>{
    //     argTest('안녕하세요');
    // })

    // arguments
    btn4.addEventListener('click', ()=>{
        let res = sum_arguments(11, 22, 33);
        console.log('합계 : ', res);
    });

    btn5.addEventListener('click', ()=>{
        let random = ran();
        console.log(`random : ${random}`);
    });

    btn6.addEventListener('click', ()=>{
        /*
        let func = funcTest();
        func();
        */
        funcTest()();

    });

    // 내장함수 eval()
    btn7.addEventListener('click', ()=>{
        console.log('input : ', calc.value);

        let res = eval(calc.value);
        console.log('res : ', res);
    });

    // isfinity(), isNaN()
    btn8.addEventListener('click', () => {
        let num1 = -10 / 0;
        let num2 = 10 / 'a';
        let p = document.getElementById('p3');
    
        p.innerHTML = `10 / 0 : ${num1} <br>`;
        p.innerHTML += `10 / 'a' : ${num2} <br>`;
        p.innerHTML += `num1 == Infinity : ${num1 == -Infinity} <br>`;
        p.innerHTML += `num2 == NaN : ${num2 == NaN} <br>`;
        p.innerHTML += `isFinite(num1) : ${isFinite(num1)} <br>`;
        p.innerHTML += `isNaN(num2) : ${isNaN(num2)} <br>`;
    });

};

function funcTest(){
    // 클로저
    //  - 내부함수가 사용하는 외부함수의 지역변수는 
    //      내부함수가 소멸할 때까지 소멸되지 않는 특성을 클로저라고 한다.
    
    let name = '문인수';

    return function(){
        alert(`${name}님 환영합니다.`);
    }
}

function ran(){
    let random = parseInt(Math.random() * 100 +1);

    return random;
}

// arguments : 매개변수의 갯수가 가변적인 경우 사용하는 속성
function sum_arguments(){
    let res = 0;

    for(let i=0; i < arguments.length; i++){
        res += arguments[i];
    }

    return res;
}


// 함수의 매개변수
// 초기값지정 (ES6부터 도입)
function argTest(value = '매개값없음'){
    alert(value);
}

// 선언적 함수
// 선언 : function  함수이름(매개변수,...){ }
// 호출 : 함수명()
function test(){
    console.log('test호출');
}
test();

// 익명의 함수를 변수에 대입
// 익명의함수 : 함수 이름이 없는 함수
let sum = function(a, b){
    return a + b;
}

console.log('함수실행결과 : ', sum(10, 20));


// 즉시실행함수
(
    function(a, b){
        console.log(`a: ${a}, b: ${b}`);
        console.log('자동으로 실행')
    }(10, 20)
);

// 화살표함수

const hi = function(){
    return alert('안녕하세요');
}

const hi1 = () => {return alert('안녕하세요(화살표함수)')};

// 처리할 라인이 하나라면 {}와 return 문을 생략할 수 있다.
const hi2 = () => alert('안녕하세요');
