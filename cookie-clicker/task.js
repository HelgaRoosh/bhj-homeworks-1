let count = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');

let countspeed = document.getElementById('clicker__speed');
let date_Before = new Date();

cookie.onclick = () => {
  count.textContent = +count.textContent + 1;
  if(+count.textContent % 2 === 1) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }
 
  //от преподавателя:
/* const image = document.getElementById("cookie");
const counterElement = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("speed__counter");
let lastCountTime = new Date();

image.onclick = () => {
  const countTime = new Date();
  image.width = ++counterElement.textContent % 2 ? 250 : 200;
  clickSpeed.textContent = (
    1000 /
    (countTime.getTime() - lastCountTime)
  ).toFixed(2);
  lastCountTime = countTime;
};
*/
  
  //Добавьте параметр «Скорость клика». Он должен показывать среднее количество кликов в секунду. 
  //Значение обновляется при каждом новом клике.Например, с момента последнего клика прошло 0.5 секунды. 
  //Тогда скорость клика = 1/0.5 = 2 клика в секунду
  
  let date_After = new Date();
  if (date_After === date_Before){//наверное можно убрать, вряд ли так быстро кто то нажмет, но для порядка пусть будет
    countspeed.textContent = 2;
  } else {
    countspeed.textContent =( 1000 / (date_After - date_Before) ).toFixed(2);
  }
  
  date_Before = date_After;
}
