import colors from 'colors'

console.log('Hello!');
console.log(process.argv)

const [min, max] = process.argv.slice(2);
const minNumber = Number(min);
const maxNumber = Number(max);

function getCount(minNumber, maxNumber) {
    if (minNumber === maxNumber && maxNumber % 2 === 0) {
        console.log(colors.red('Простых чисел нет!'))
    } else if (minNumber === maxNumber && maxNumber % 2 !== 0) {
        console.log(colors.yellow(minNumber))
    }
    else if (isNaN(minNumber) || isNaN(maxNumber)) {
        console.log(colors.red('Введенный символ не является числом'))
    } else {
        for (let i = minNumber; i < maxNumber; i++) {
            if (i === 2) {
                console.log(colors.yellow(i))
            }
            if (i !== 1 && i % 2 !== 0 ) {
            console.log(colors.red(i))
                if (i >= maxNumber || i === maxNumber - 1) {
                    break;
                }
                if (i = i + 2) {
                    console.log(colors.green(i))
                }
                if (i >= maxNumber || i === maxNumber - 1) {
                    break;
                }
                if (i = i + 2) {
                   console.log(colors.yellow(i))
                }
            }
        }
    }
}

getCount(minNumber, maxNumber)
