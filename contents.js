// 20210791 컴퓨터공학전공 전하경
// 첫번째. 글씨 위에 마우스 커서를 올렸을 때 글씨가 변화하는 이벤트 함수 

document.addEventListener('DOMContentLoaded', function() {
    let mouseclick = document.querySelectorAll('.baseballagain > h1');

    mouseclick.forEach(function(h1) {
        h1.addEventListener('mouseover', function() {
            // 마우스 커서를 올렸을 때 
            h1.style.color = 'yellow';
            h1.style.fontSize = '60px';
        });

        h1.addEventListener('mouseout', function() {
            // 마우스 커서를 내렸을 때 
            h1.style.color = '#fff';
            h1.style.fontSize = '48px';
        });
    });
});

 // 두번째. 검색창에 검색어를 입력했을 때 팝업이 뜨게 하는 이벤트 함수 
 document.addEventListener('DOMContentLoaded', function() {
    // 이벤트 리스너 함수. 
    var form = document.querySelector('.searchArea form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // 폼이 제출되었을 때의 이벤트를 처리한다. 
        // 폼에 입력된 검색어를 가져와서 창을 출력함 
        var input = document.querySelector('.searchArea input');
        var searchValue = input.value.trim();
        
        if (searchValue !== '') {
            var message = searchValue + '가 성공적으로 입력되었습니다!';
            alert(message);
        }
    });
});

function submitForm() { 
    // 폼의 제출 이벤트를 발생시키는 역할을 해줌. 
    // 버튼을 클릭했을 때 폼을 제출하는 동작을 수행하기 위해 사용하는 함수 
    var form = document.querySelector('.searchArea form');
    form.dispatchEvent(new Event('submit'));
}

// 세번째 이벤트 함수.

// 글자에 마우스를 올리면 사진이 나타나는 이벤트 함수

function showImage(element) { // 마우스 커서를 올렸을 경우 
    var image = element.querySelector('.logo');
    image.style.opacity = 1;
  }

  function hideImage(element) { // 마우스 커서를 떼었을 경우
    var image = element.querySelector('.logo');
    image.style.opacity = 0;
  }

  /* 
  유명한 선수 이름을 뽑아보는 함수. 네번째 이벤트 함수

  */

  function pickRandom() {
    var items = ['기아타이거즈 투수 양현종', '두산베어스 포수 양의지', '롯데자이언츠 타자 이대호', '엘지트윈스 타자 박해민', '삼성라이온즈 타자 이승엽']; // 뽑을 선수 이름들
    var randomIndex = Math.floor(Math.random() * items.length); // 랜덤 인덱스 생성
    var resultElement = document.getElementById('result');
    resultElement.textContent = items[randomIndex]; // 결과를 표시
  }
  
  
// (1). 자바스크립트로 승률을 계산해주는 순수 함수
function calculateWinRate(wins, losses) {
    const Games = wins + losses;
    if (Games === 0) { // 
      return 0;
    }

    const winRate = wins / Games;
    return winRate;
  }

  function handleCalculate() {
    const winsInput = document.getElementById('wins');
    const lossesInput = document.getElementById('losses');
    const resultContainer = document.getElementById('result');

    const wins = parseInt(winsInput.value, 10);
    const losses = parseInt(lossesInput.value, 10);

    const winRate = calculateWinRate(wins, losses);
    resultContainer.textContent = '승률: ' + winRate.toFixed(3) ;
  }

  /* 함수에 대한 설명
  만약 경기 수가 0이라면, 승률은 0이기 때문에 0으로 처리한다.
  그리고 0이 아닌 경우는 승률을 계산한다. 계산 방법은 승리한 경기 수를 전체 경기 수로
  나누면 된다. 그리고 마찬가지로 계산된 승률을 반환한다. 
  승리 수와 패배 수는 모두 정수이다. 따라서 정수로 변환하는 과정을 거친다.
  승률 계산 함수인 calculateWinRate를 호출한다.
  계산된 승률을 소수점 단위까지 표시하여 결과로 출력한다 */


  
/* (2). 두번째 순수 함수(validateEmail)
원래 있던 이메일 입력 창에 이메일 주소가 유효한지 확인해보는 함수를 작성하였습니다. 
validateEamil 함수를 이용하여 이메일 주소의 유효성을 검사합니다. 

validateEmail 함수는 주어진 이메일 주소가 유효한지 검사하는 역할을 하고,이메일 주소의 유효성을
판단하기 위해 정규식을 사용한다. 위의 코드에서는 이메일 주소가 공백 없이 @ 기호로 구분된 도메인을 가지는 형식인지 확인한다. 
*/

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

$(document).ready(function() { // 폼이 제출되었을 때 이메일 주소를 검사하고 결과를 화면에 표시함 
  $('#emailForm').submit(function(event) {
    event.preventDefault();
    const email = $('#email').val(); // 폼에서 이메일 입력 필드의 값을 가져옴 
    const isValid = validateEmail(email); // 유효한지 검사 

    if (isValid) {
      $('#result2').text("유효한 이메일 주소입니다.");
    } else {
      $('#result2').text("유효하지 않은 이메일 주소입니다.");
    }
  });
});


/* (3). OPS를 계산하는 함수
  calculateOPS 함수와 calculateOPSFunction으로 구성되어 있음
  calculateOPS: DOM 요소를 사용하여 입력값을 읽어와 calculateOPSFunction 함수를 호출한 뒤 
  결과를 다시 DOM 요서에 설정하는 역할을 한다.  */

function calculateOPS() {
  // DOM 요소 가져오기 
  const onBasePercentageInput = document.getElementById("on-base-percentage");
  const sluggingPercentageInput = document.getElementById("slugging-percentage");
  const opsResult = document.getElementById("ops-result");

  // 입력값 가져오기 
  const onBasePercentage = parseFloat(onBasePercentageInput.value);
  const sluggingPercentage = parseFloat(sluggingPercentageInput.value);

  // OPS 계산하기
  const ops = calculateOPSFunction(onBasePercentage, sluggingPercentage);

  // 결과 출력하기 
  opsResult.textContent = "OPS: " + ops.toFixed(3);
}

function calculateOPSFunction(onBasePercentage, sluggingPercentage) {
  // 출루율+ 장타율 더해 반환하기 
  return onBasePercentage + sluggingPercentage;
}




// AJAX 구현

$(document).ready(function() {
  // 버튼 클릭 시 AJAX 요청 보내기
  $("#fetch-button").click(function() {
    fetchData();
  });
});

function fetchData() {
  // AJAX 요청 보내기
  $.ajax({
    url: "https://thumb.mt.co.kr/06/2021/11/2021112912403488334_1.jpg/dims/optimize/",
    method: "GET",
    dataType: "json",
    success: function(response) {
      // 응답이 성공적으로 도착한 경우 처리
      processResponse(response);
    },
    error: function(xhr, status, error) {
      // 요청이 실패한 경우 에러 처리
      handleError(xhr.status);
    }
  });
}

function processResponse(response) {
  // 응답 데이터 처리
  var imageUrl = response.url;

  // 이미지 엘리먼트 생성
  var image = $("<img>").attr("src", imageUrl);

  // 이미지를 표시할 요소에 추가
  $("#image-container").append(image);
}

function handleError(status) {
  // 에러 처리
  console.log("Request failed with status:", status);
}

/* AJAX 함수 설명.
위의 코드는 jQuery를 사용하여 AJAX 요청을 보내고 응답을 처리하는 기능을 구현한 것이다.
문서가 로드된 후 버튼이 클릭되면 fetchData() 함수를 호출하는 이벤트 핸들러를 등록한다.
fetchData() 함수는 AJAX 요청을 보내는 역할이다. 
응답이 성공적으로 도착하면 success 함수가 호출되어서 processResponse를 호출한다. 반대로 
요청이 실패한 경우에는 error 콜백 함수를 호출한다. 
그리고 processResponse는 이미지를 표시하는 역할을 해준다. 
handleError는 요청이 실패한 경우에 에러를 처리하는 역할을 한다. 
버튼 클릭 시 AJAX에 요청을 보내고 응답을 처리하여 이미지를 표시하는 기능을 구현했다 */
