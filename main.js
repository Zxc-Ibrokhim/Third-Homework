// let userRandomNumber = alert("Сейчас у вас появится любое рандомное число")
// let randomNumber = Math.round(Math.random() *100)
// alert(`Рандомное число: ${randomNumber}`)
// let answer = confirm("Мы хотим это число умножить и поделить на 2")
// alert(answer)
// let result = randomNumber * 2;
// let result1 = randomNumber / 2;
//  alert(`Результат умножения: ${result}\nРезультат деления: ${result1}`)


const userRandomNumber = alert("Сейчас у вас выйдет любое рандомное число")
const randomNumber = Math.round(Math.random() *100)
alert(`Рандомное число: ${randomNumber}`)
const register = confirm(`Мы ${randomNumber} хотим умножить и поделить на 2`)

alert(`
Рандомное число: ${randomNumber}
Мы это число умножили на 2 вышел ответ ${randomNumber * 2} 
Мы это число поделили на 2 вышел ответ ${randomNumber / 2} 
И это число мы поделили на 3 и вышел остаток ${randomNumber % 3}
`)