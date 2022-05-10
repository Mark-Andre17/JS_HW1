function simpleNumbers(a){
    resultArray = []
    num:
    for (let i = 2; resultArray.length < a; i++) { 

        for (let j = 2; j < resultArray.length; j++) { 
            p = resultArray[j];
            if (p > 1 && 0 === i % p)
            continue num;
        }
        resultArray.push(i);
    }
return resultArray;
}

console.log(simpleNumbers(+process.argv[2]));