let now = new Date();

let currentHour = now.getHours();
if(currentHour >= 12){
    console.log('����' + (currentHour -12) + "��");
}
else{
    console.log('����' + currentHour + '��');
}