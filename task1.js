function simpleNumbers(a){
    const notSimple = []
    const resultArray = [];
    for (let i = 2; i <= a; ++i){
        if (!notSimple[i]){
            resultArray.push(i);
            for (let b = i * 2; b <= a; b += i){
                notSimple[b] = true;
            }
        }
    }
    return resultArray;
}

console.log(simpleNumbers(process.argv[2]));