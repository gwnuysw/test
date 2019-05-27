function solution(s1, s2) {
    var answer = 0;
    var a = [], diff = [];

    for (var i = 0; i < s1.length; i++) {
        a[s1[i]] = true;
    }
    for (var i = 0; i < s2.length; i++) {
        if (a[s2[i]]) {
            delete a[s2[i]];
        } else {
            a[s2[i]] = true;
        }
    }
    for (var k in a) {
        diff.push(k);
    }
    answer = parseInt(diff[0]);
    return answer;
}

function solution(s1, s2) {
    var answer = true;
    let s1characters = {};
    let s2characters = {};
    let s1order = [];
    let s2order = [];
    let s1Array = s1.split('');
    let s2Array = s2.split('');
    for(var index in s1Array){
        if(index == 0){
            s1order.push(s1Array[0]);
        }
        else if(s1order[s1order.length-1] == s1Array[index]){

        }
        else{
            s1order.push(s1Array[index]);
        }
    }
    for(var index in s2Array){
        if(index == 0){
            s2order.push(s1Array[0]);
        }
        else if(s2order[s2order.length-1] == s2Array[index]){

        }
        else{
            s2order.push(s2Array[index]);
        }
    }
    console.log(s1order, s2order)
    s1Array.forEach((element)=>{
        if (!(element in s1characters)){
            s1characters[element] = 1;
        }
        else{
            s1characters[element] += 1;
        }
    });
    s2Array.forEach((element)=>{
        if (!(element in s2characters)){
            s2characters[element] = 1;
        }
        else{
            s2characters[element] += 1;
        }
    });
    for( var element in s1characters){
        if(s1characters[element] > s2characters[element]){
            answer = false;
        }
        for (var i = 0; i < s1order.length; ++i) {
            if (s1order[i] !== s2order[i]) {
                answer = false;
            };
        }

    }
    return answer;
}
console.log(solution('a', 'aaaaa'));

function solution(number, firecracker) {
    var answer = number;
    let position = firecracker.length - 1;
    let getcheese = [];
    for(var i = 0; i < number; i++){
        getcheese[i] = false;
    }
    for (var i = firecracker.length -1; i >= 0; i--){
        let fire = firecracker[i];
        for(var j = i - 1; j >= 0; j--){
            if(fire > 0){
                fire--;
                if(getcheese[j] == true){
                    continue;
                }
                else{
                    answer--;
                    getcheese[j] = true;
                }
            }
        }
    }
    return answer;
}
