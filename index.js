 let countLabel = document.querySelector('#count');
 let lowerCounter = document.querySelector('#lowerCount');
 let addCounter = document.querySelector('#addCount');

 let counter = countLabel.innerHTML;

 addCounter.addEventListener('click', function(){
   counter++;
   countLabel.innerHTML = counter;
   if(counter < 0){
     countLabel.style.color = 'red';
   }else if(counter === 0){
     countLabel.style.color = 'black';
   }else {
     countLabel.style.color = 'green';
   }

 })

 lowerCounter.addEventListener('click', function(){
  counter--;
  countLabel.innerHTML = counter;
  if(counter < 0){
    countLabel.style.color = 'red';
  }else if(counter === 0){
    countLabel.style.color = 'black';
  }else {
    countLabel.style.color = 'green';
  }

 })
