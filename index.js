
function find(arr) {
    let x = 2
    for (let i of arr) {
        if (i + 1 !== x) {
            return (x - 1)
        }
        x++
    }

}

console.log(find([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12]))


function baj(a, b) {
    if (b === 0) {
        return a;
    } else {
        return baj(b, a % b);
    }
}

const result = baj(250, 350);
console.log(result);





function compressText(text) {
    var result = '';
    if (text.length > 0) {
        var count = 1;
        var value = text[0];
        for (var i = 1; i < text.length; ++i) {
            var entry = text[i];
            if (entry == value) {
                count += 1;
            } else {
                result += count + '' + value;
                count = 1;
                value = entry;
            }
        }
        result += count + '' + entry;
    }
    return result;
}


// Usage example:

var text = 'AAABBBBBBACCCCCCDDAAAAAA';
var compressedText = compressText(text);

console.log(compressedText);



function simpleRep(text){
    const alphavit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let rep = {}
    alphavit.forEach(ch => {
        rep[ch] = alphavit[Math.floor(Math.random()*(alphavit.length))]
    })
    console.log(rep)

    const arr = text.split('').map(ch => {
        let x = ch.toUpperCase() == ch
        return x ? rep[ch] : (rep[ch.toUpperCase()]).toLowerCase()
    })

    return arr.join('')
}

console.log(simpleRep('vahan'))





function filter(arr, callback){
return arr.filter(n => callback(n))
}

let arr = [5, 2, 3, 8, 10, 4]

const filtered = filter(arr, (n) => n % 2 == 0)

console.log(filtered)





function kesar(text, key){
    const alphavit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    return text.split('').map((ch) => {
        let y = alphavit.indexOf(ch.toUpperCase())
        const newIndex = (y + key < alphavit.length) ? key + y : key + y - alphavit.length
        return ch.toUpperCase() == ch ? alphavit[newIndex] : alphavit[newIndex].toLowerCase() 
    }).join('')
    
    }
    
    
    console.log(kesar ("vahan", 10))
    
    




// function customCallback(success, failure) {
//     // Simulate an asynchronous operation
//     setTimeout(function () {
//       const randomValue = Math.random();
//       if (randomValue >= 0.5) {
//         success(randomValue);
//       } else {
//         failure("Operation failed");
//       }
//     }, 1000); // Simulate a 1-second delay
//   }
  
//   function onSuccess(data) {
//     console.log("Success:", data);
//   }
  
//   function onFailure(error) {
//     console.error("Failure:", error);
//   }
  
//   customCallback(onSuccess, onFailure);
  