let divNode = document.querySelector('.div');
let btnNode = document.querySelector('.button');

btnNode.addEventListener('click', () => {
    let a = document.querySelector('.input1').value;
    let b = document.querySelector('.input2').value;
   
if ( a >= 100 && a <= 3000 && b >=100 && b <=3000 ) {
    fetch(`https://picsum.photos/${a}/${b}`)
      .then((response) => { console.log('response', response.url);
      divNode.innerHTML = `<img src="${response.url}" alt="">
	  <a href="${response.url}" download>Скачать картинку</a>`;
        return response.json();
      })
      .catch(() => { console.log('error') });
                   }
else {
  let err2 = `<br><span>«число вне диапазона от 100 до 300»</span>`;
  divNode.innerHTML = err2;
}}
)
