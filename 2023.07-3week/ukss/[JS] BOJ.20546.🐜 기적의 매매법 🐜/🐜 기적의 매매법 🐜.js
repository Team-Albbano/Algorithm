const [money, list] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const chart = list.split(' ').map(Number);

function junhyeon(input) {
    let money = Number(input);
    let holdingStock = 0;
    for (let stock of chart) {
        while (money >= stock) {
            money -= stock;
            holdingStock++;
        }
    }

    const answer = money + chart[chart.length - 1] * holdingStock;
    return answer;
}

function seongmin(input) {
    let money = Number(input);
    let holdingStock = 0;
    let temp = 0;
    let increase = 0;
    let decrease = 0;

    for (let stock of chart) {
        if (temp < stock) {
            increase++;
            decrease = 0;
        } else if (temp > stock) {
            decrease++;
            increase = 0;
        } else {
            increase = 0;
            decrease = 0;
        }

        if (increase >= 3) {
            while (holdingStock) {
                money += stock;
                holdingStock--;
            }
        } else if (decrease >= 3) {
            while (money >= stock) {
                money -= stock;
                holdingStock++;
            }
        }

        temp = stock;
    }

    const answer = money + chart[chart.length - 1] * holdingStock;
    return answer;
}

const BNP = junhyeon(money);
const TIMING = seongmin(money);

function solution(BNP, TIMING) {
    if (BNP > TIMING) {
        return 'BNP';
    } else if (BNP < TIMING) {
        return 'TIMING';
    } else {
        return 'SAMESAME';
    }
}

const answer = solution(BNP, TIMING);
console.log(answer);
