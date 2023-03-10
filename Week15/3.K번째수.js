// [PGS] K번째수 / leve1
// 난이도 :  level 1
// 풀이시간 : 30분
// 점수 : -

/*
문제
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
array의 길이는 1 이상 100 이하입니다.
array의 각 원소는 1 이상 100 이하입니다.
commands의 길이는 1 이상 50 이하입니다.
commands의 각 원소는 길이가 3입니다.
입출력 예
array	commands	return
[1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
입출력 예 설명
[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.
*/


/*
< 의사코드 >
- for문 안에서 commands안의 i번째 인자의 [0,1,2]으로 돌아가면서 확인할 수 있도록 한다.
- commands의 index [0]과 [1]를 가져와서 array를 slice해 준다 이 때 앞에서 자르는 인자의 경우, comaands[i][0]가 2일 경우 2번째 인자를 가져와야 하는데 index번호를 구하려면 -1이 필요하다.
- slice한 뒤 sort로 오름차순정렬 한다.
- 결과값을 담으려고 선언한 result에 push로 넣는데 for문에서 돌려서 구한commands[i][2]를 활용하여 최종 값을 구한다
*/
 
function solution(array, commands) {
    let result = [];
    
    for(let i = 0; i < commands.length; i++) {
        newArr = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>{return a-b});
        result.push(newArr[commands[i][2]-1])
    }
    return result;
}

 /*
테스트 1 〉	통과 (0.12ms, 30MB)
테스트 2 〉	통과 (0.12ms, 29.9MB)
테스트 3 〉	통과 (0.10ms, 30.2MB)
테스트 4 〉	통과 (0.08ms, 29.6MB)
테스트 5 〉	통과 (0.12ms, 30MB)
테스트 6 〉	통과 (0.10ms, 29.9MB)
테스트 7 〉	통과 (0.17ms, 30.1MB)
 */

