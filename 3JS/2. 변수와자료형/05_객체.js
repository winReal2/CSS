window.onload = () => {
    btn1.addEventListener('click', () => {
        // 객체 선언
        // (속성 : 속성값)으로 나열
        let product = {
            0 : '배열 흉내'   // 객체명['속성명'] 입력하여 접근 가능
            , pName : '아이폰12'
            , price : 1000000
            , price : 1500000     // 중복 선언시 마지막에 입력된 값으로 세팅
            , brand : '애플'
            , spec : ['OLED', 'ISO15']
        };

        console.log('product : ', product);
        area1.innerHTML = '객체 선언 테스트';
        area1.innerHTML += `객체명['속성명'] 으로 접근하는 방법 <br>`;
        area.innerHTML += `product[0] : ${product[0]} <br>`;
        area.innerHTML += `product['pName'] : ${product['pName']} <br>`;
        area.innerHTML += `product[0] : ${product[0]} <br>`;
        area.innerHTML += `product[0] : ${product[0]} <br>`;
        area.innerHTML += `product[0] : ${product[0]} <br>`;
        area.innerHTML += `product[0] : ${product[0]} <br>`;
        area.innerHTML += `product[0] : ${product[0]} <br>`;
        area1.innerHTML += `객체명.속성명 으로 접근하는 방법 <br>`;
 

        // 속성명에 공백, 특수문자가 입력된 경우 '',"" 로 묶어 주어야 하며
        // .을 이용해서 접근이 불가능 하다 (대괄호[ ]를 이용해서 값을 가져올 수 있다)
        // 띄어쓰기, 문자열, 특수문자 포함 하고 싶으면 따옴표로 묶어주기
        let user = {
            'user name' : '문인수'      
            , user_age : 20
            , 'id!!' : 'ismoon'
        };
    });

    // =================================================
    btn2.addEventListener('click', () => {
        let name = '고경희';

        // 객체 선언
        let dog ={
            name : '백구'
            , kind : '진돗개'
            // 객체의 메소드 (객체 내부에 함수 포함되어 있음)
            , eat : function(food){
                // 객체 내부의 속성에 접근하기 위해 this를 사용
                console.log(`${this['kind']} ${this.name}가 ${food}를 먹습니다`);
            }
        }

        dog.eat('닭가슴살');
        
    });

   // =================================================

    btn3.addEventListener('click', () =>{
        let game = {
            title : '크아'
            , price : 0
            , support05 : ['win7', 'win10']
            , service : true
        };
        console.log(game);

        // 게임이라는 객체가 가지고 있는 키값을 알아올 수 있음
        for(const key in game){
            console.log(`key : ${key}, game[key] : ${game[key]}`);
        }
    });

// =================================================

    btn4.addEventListener('click', ()=>{
        // 빈 객체 선언
        let student = {};

        // 객체의 속성 추가
        // 속성이 이미 존재하는 경우 업데이트, 없는 경우 추가
        student.name = '홍길동';
        student.age = 20;
        student['job'] = '도둑'

        //객체에 메소드 추가
        student.whoAreYou = function(){
            let str = '';

            //this는 객체를 의미
            for(const key in this){
                if(typeof(this[key]) !== 'function'){
                    str += `${key} : ${this[key]}\n`;
                }
            }
            return str;
        }
        console.log(student);
        console.log(student.whoAreYou());
        //객체에 해당 속성이 정의되어 있으면 true
        // 없으면 false
        console.log('job' in student);


        // 객체의 속성을 제거
        delete(student.job);

        
        console.log(student);
        console.log(student.whoAreYou());
        console.log('job' in student);
    });




}