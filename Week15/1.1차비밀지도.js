// [PGS] [1차] 비밀지도 / leve1
// 난이도 :  level 1
// 풀이시간 : 
// 점수 : +2

/*
문제
비밀지도
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
"지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
secret map

네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.

입력 형식
입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.

1 ≦ n ≦ 16
arr1, arr2는 길이 n인 정수 배열로 주어진다.
정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.
출력 형식
원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.

입출력 예제
매개변수	값
n	5
arr1	[9, 20, 28, 18, 11]
arr2	[30, 1, 21, 17, 28]
출력	["#####","# # #", "### #", "# ##", "#####"]
매개변수	값
n	6
arr1	[46, 33, 33 ,22, 31, 50]
arr2	[27 ,56, 19, 14, 14, 10]
출력	["######", "### #", "## ##", " #### ", " #####", "### # "]
*/

/*
< 의사코드 >
다른진수 -> 10진수 : parseInt()
10진수 -> 다른 진수 : toString()

toString으로 2진법으로 만들어준다.
값중에 가장 큰 값을 구해서 그 길이를 저장해놓고, 다른 값들도 똑같은 길이가 될때까지 앞에 0을 붙여준다.
두 행렬을 비교해서 둘다 0이면 공백 아니면 #을 돌려준다.

1. 답을 담을 배열 선언
2. 배열을 2진수로 변환하여 담을 배열을 각각 선언한다 arr1는 tmp1, arr2는 tmp2
3. 이중 for문으로 가장 긴 이진수 길이만큼 순회를 하면서 두 tpm의 요소를 비교하여 
    삼항연산자로 0일 경우 공백을, 0이 아닐 경우 #을 val에 더하도록 한다.
4. val을 answer에 push하여 return한다.
*/

function solution(n, arr1, arr2) {
    let answer = [];

    const tmp1 = [];
    const tmp2 = [];
    const len = Math.max(...arr1).toString(2).length;

    //tmp1배열만들기
    for(let i = 0; i< arr1.length; i++){
        tmp1.push (arr1[i].toString(2))
        //가장 긴 길이보다 같지 않을 경우 그 부족한 길이 만큼 0을 해당하는 i번째 요소에 더해준다.
        while(tmp1[i].length !== len){
            tmp1[i] = "0"+tmp1[i]
        }
    }

    //tmp2 배열만들기
    for(let i = 0; i< arr2.length; i++){
        tmp2.push (arr2[i].toString(2))
        //가장 긴 길이보다 같지 않을 경우 그 부족한 길이 만큼 0을 해당하는 i번째 요소에 더해준다.
        while(tmp2[i].length !== len){
            tmp2[i] = "0"+tmp2[i]
        }
    }
 
    //두 행렬을 비교해서 둘다 0이면 공백 아니면 #을 돌려준다.
    for(let i = 0 ; i < len; i++){
        let val =""
        for(let j = 0 ; j < len; j++){
            tmp1[i][j] === 0 && tmp2[i][j] === 0 ? val += " " : val += "#" 
        }
        answer.push(val);
        val = "";
    }

    return answer;
}

/*
테스트 1 〉	통과 (0.19ms, 33.4MB)
테스트 2 〉	통과 (0.25ms, 33.5MB)
테스트 3 〉	통과 (0.08ms, 33.4MB)
테스트 4 〉	통과 (0.18ms, 33.5MB)
테스트 5 〉	통과 (0.18ms, 33.4MB)
테스트 6 〉	통과 (0.20ms, 33.6MB)
테스트 7 〉	통과 (0.18ms, 33.5MB)
테스트 8 〉	통과 (0.08ms, 33.4MB)
*/
