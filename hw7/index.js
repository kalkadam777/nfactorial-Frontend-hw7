// Задержка на промисах

function delay(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(),ms);
    })
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));

//   Можно ли "перевыполнить" промис?

let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);  // 1

//   Промисы: сравните then и catch

promise.then(f1).catch(f2); // если в f1 ошибка то сработает catch

// Против:

promise.then(f1, f2);
