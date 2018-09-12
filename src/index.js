function getZerosCount(number) {
    let numbers = [];

    for (let i = number; i > 0; i--){
        numbers.push(i);
    }

    return getZeroCount(numbers);
}

function getDigitCount(allFactorNum, digit){

    let count = 0;

    for(let elem of allFactorNum){

        if(digit !== 10){
            while(true){
                if((elem % digit === 0) && (elem % 10 !== 0)) {
                    count++;
                    elem /= digit;
                    continue;
                }
                if(elem === 50){
                    count++;
                    elem /= digit;
                }
                else break;
            }
        }
        else{
            while(elem % digit === 0){
                count++;
                elem /= digit;
            }
        }
    }

    return count;
}

function getZeroCount(allFactorNum){

    let two  = getDigitCount(allFactorNum, 2);
    let five = getDigitCount(allFactorNum, 5);
    let ten  = getDigitCount(allFactorNum, 10);

    return two < five ? two + ten : five + ten;
}

console.log(getZerosCount(10));

module.exports = getZerosCount;
