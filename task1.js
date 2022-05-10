function simpleNumbers(a){
    resultArray = [];
    num:
    for (let i = 1; resultArray.length < a; i++) { 

        for (let j = 2; j < resultArray.length; j++) { 
            p = resultArray[j];
            if (i % j == 0)
            continue num;
        }
        resultArray.push(i);
    }
return resultArray;
}

console.log(simpleNumbers(+process.argv[2]));