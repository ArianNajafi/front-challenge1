// this function get us random numbers between x to y

export function getRandoms(end) {
    const randomList = [];
    while (randomList.length !== end) {
        let randomNumber = Math.floor(Math.random() * (end)) + 0;
        let isExsist = false;
        randomList.map((num) => {
            if (num === randomNumber) {
                isExsist = true;
            }
        })
        if (!isExsist) {
            randomList.push(randomNumber);
        }
    }

    return randomList;
}