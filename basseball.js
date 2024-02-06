// readline 모듈 사용 부분
const start = require('readline')
const play = start.createInterface({
    input: process.stdin,
    output: process.stdout
  });



//  랜덤 숫자 만들기
const success = []


function randomnubers(){
    for (let i = 0; success.length < 3; i++){
        let a = Math.floor(Math.random() * 10);
        if (!success.includes(a)) {
            success.push(a)
        }
    }
}

randomnubers();

console.log('투수가 공을 던졋습니다. 잘 맞춰보세요!');

let playcount = 0; //시도 횟수 카운트

// 2. 한자리 숫자에 대하여 볼,스트라이크 구분하기

function Judgment(scv){
    playcount++
    let strike = 0;
    let ball = 0;
    for( let i = 0; i <success.length; i++){
        if (success[i] === scv[i]){
            strike++;
        } else if(success.includes(scv[i])){
            ball++;
        }
    }
    console.log(`${strike}S`,`${ball}B`)
    return strike === 3;
}

// 야구 시작 종료 부분
function playball() {
    play.question('숫자를 세개 입력하세요: ', (answer) => {
      const scv = answer.split('').map(Number);
      if (Judgment(scv)) {
        console.log(`정답입니다. 축하드립니다. ${playcount}번 만에 맞추셨습니다.!`);
        play.close();
      } else {
        console.log(`틀렸습니다. ${playcount}번째 휘두르는 중입니다.`)
        playball(); // 재귀 호출로 다시 질문
      }
    });
  }

  playball()
