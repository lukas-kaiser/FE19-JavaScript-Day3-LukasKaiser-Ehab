let martin = [76,64,81,57,94];
let thomas = [85,49,81,72,55];
let klaus = [65,91,84,67,85];
let maria = [93,70,81,64,84];
let david = [81,99,71,100,69];

function grades(name){
    for (let i = 0; i < name.length; i++) {
        if (name[i]<60){
        console.log(name[i]+ " F");
        }
        else if (name[i]<70){
        console.log(name[i]+ " D");
        }
        else if (name[i]<80){
        console.log(name[i]+ " C");
        }
        else if (name[i]<90){
        console.log(name[i]+ " B");
        }
        else {
            console.log(name[i]+ " A");
        }
    }
}

grades(martin);
grades(thomas);
grades(klaus);
grades(maria);
grades(david);

const allGrades = martin.concat(thomas, klaus, maria, david);
 
function classAverage(array){
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    console.log(sum/25);
}

classAverage(allGrades);
