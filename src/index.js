function getZerosCount(number) {

    let zeros = 0;

    for (let i = 5; i <= number; i += 5) {

        let num = i;

        while (num % 5 === 0) {
            num /= 5;
            zeros++;
        }
    }

    return zeros;
}

module.exports = getZerosCount;
