function fizzBuzz(upTo) {
    for (let i = 1; i <= upTo; i++) {
        const divisibleByThree = i%3 === 0;
        const divisibleByFive = i%5 === 0;
        if (divisibleByThree && divisibleByFive){
            document.write('Fizzbuzz <br>')
        }
        else if (divisibleByThree) { 
            document.write('Fizz <br>');
        }    
        else if (divisibleByFive) {
            document.write('Buzz <br>');
        }
        else {
            document.write(i + '<br>');
        }
       
    }
}

fizzBuzz(100);