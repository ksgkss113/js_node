let now = new Date();

let currentHour = now.getHours();
if(currentHour >= 12){
    console.log('오후' + (currentHour -12) + "시");
}
else{
    console.log('오전' + currentHour + '시');
}