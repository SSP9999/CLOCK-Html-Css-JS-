setInterval(()=>{
  let d=new Date()
  let hour=d.getHours();
  let minut=d.getMinutes();
  let sec=d.getSeconds();
  let hour_rotation=30*hour+minut/2;
  let min_rotation=6*minut;
  let seconds_rotation=6*sec;
   
  ours.style.transform=`rotate(${hour_rotation}deg)`;
  mmm.style.transform=`rotate(${min_rotation}deg)`;
  seconds.style.transform=`rotate(${seconds_rotation}deg)`;
}


,1000)

