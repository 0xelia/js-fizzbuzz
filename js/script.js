let gridElement = document.getElementById('grid');


for ( let i = 0; i < 100; i++ ) {
    let number = i + 1;
    
    let divElement = document.createElement('div');
    gridElement.append(divElement)
    divElement.append(number)
    divElement.classList.add('cell')

    if (number % 3 == 0 && number % 5 == 0) {
        divElement.innerHTML = 'BuzzFizz'
        divElement.style.backgroundColor = 'skyblue'
    } else if (number % 5 == 0) {
        divElement.innerHTML = 'Buzz'
        divElement.style.backgroundColor = 'blue'
    } else if (number % 3 == 0) {
        divElement.innerHTML = 'Fizz'
        divElement.style.backgroundColor = 'violet'}
    }
    