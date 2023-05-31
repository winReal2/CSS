window.onload = function(){
    
    // 현재 나의 위치를 확인하고 mapX, mapY 요소의 value값에 세팅하기
    if("geolocation" in navigator){ 
        // 위치정보 사용가능
        
        // 현재위치 요청
        // getCurrentPosition(성공콜백, 오류콜백)
        navigator.geolocation.getCurrentPosition((position) => {
        doSomething(position.coords.latitude, position.coords.longitude);
        });  //얘가 콜백올떄까지 기다리지 않음. 그래서 얘(doSomething)가 나중에 들어옴
      } else {
        // 위치정보 사용 불가능
        alert ('geolocation 지원불가! - 현재위치를 알수 없습니다.')
      }

// ==============================================================

    //let 키워드로 선언해야 addEventListener 자동완성됨
    let btn = document.querySelector('#btnCampInfo');

    btn.addEventListener('click', function(e){
        //기본이벤트 제거
        e.preventDefault();

        let campForm = document.querySelector('#campForm');
        let formData = new FormData(campForm);

        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        let parms = '';

        // formData.entries()
        // 이 객체에 담긴 모든 키/밸류 쌍을 순회할 수 있는 iterator를 반환
        //key / value pairs(쌍) 반환
        for(let pair of formData.entries()){
            console.log('pair[0]', pair[0]);
            console.log('pair[1]', pair[1]);

            parms += `${pair[0]}=${pair[1]}&`;
        }

        url += parms;
        console.log('url', url);

        //es6부터 사용됨
        //url요청 결과를 받아온다(get방식)
        fetch(url)

        //화살표함수에서 한줄인 경우 return문과 중괄호{ }가 생략가능
        //요청결과가 성공이라면
        //res. json() : javascript object로 반환
        // res.json()반환된게(받아와서 객체로 전환하고) (json)여기서 받아짐 
        .then(res => res.json())
        .then((json)=>{
            console.log('json', json);
            //json객체로부터 가져오기위해 jsObj를 json으로 변경
            // 캠핑장 리스트를 매개변수로 넣어줍니다!
            printCampInfo(json.response.body.items.item);
        })

        // .catch((err) => console.log(err));


        // doSomething(latitude, longitude);
    });
}

// ==============================================================

// 캠핑장 정보 출력
// 배열을 매개변수로 받아서 배열에 입력된 캠핑장 정보를 화면에 출력!
function printCampInfo(itemArr){

    // response의 아이템을 매개변수로 받아주면 될것 같음
    //let itemArr = jsObj.response.body.items.item;

    //복붙해왔으니까 result박스 html에 만들어줌(출력박스)
    let resDiv = document.querySelector('#result');
    // div 초기화 (빈 값으로 초기화) 
    // 초기화하지 않으면 갱신할때마다 계속 남아있기 때문에!
    resDiv.innerHTML += '';

    resDiv.innerHTML += '<ul>';

        for(item of itemArr){
            resDiv.innerHTML += `
                <li>
                    <h1>${item.facltNm}</h1>
                    <p><img src = "${item.firstImageUrl}" alt="캠핑이미지"></p>
                    <p>${item.intro}</p>    
                </li>
            `;
        }
        resDiv.innerHTML += '</ul>';
}

// ==============================================================

// 현재 위치를 받아서 mapX, mapY에 출력
function doSomething(latitude, longitude){
    console.log('latitude', latitude); //경도
    console.log('longitude', longitude);  //위도
    // resDiv.innerHTML = `경도 : ${latitude}, 위도 : ${longitude}`; 
   
    let mapX = document.querySelector('input[name=mapX]');
    let mapY = document.querySelector('input[name=mapY]');

    mapX.value = longitude;
    mapY.value = latitude;
  } 