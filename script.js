const d=WEDDING_DATA;
monogram.textContent=d.monogram;
groom.textContent=d.groom;
bride.textContent=d.bride;
invite.textContent=d.invitation;
date.textContent=d.dateText;
time.textContent=d.timeText;
place.textContent=d.venue+', '+d.location;
specialMessage.textContent=d.specialMessage;
storyText.textContent=d.story;
venue.textContent=d.venue;
detailDate.textContent=d.dateText;
detailTime.textContent=d.timeText;
location.textContent=d.location;
map.href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(d.mapQuery);

function tick(){
  let diff=new Date(d.dateISO)-new Date();
  if(diff<0){
    countdown.innerHTML='<div><strong>Today</strong><span>Wedding</span></div>';
    return;
  }
  let day=Math.floor(diff/864e5);
  let h=Math.floor(diff/36e5)%24;
  let m=Math.floor(diff/6e4)%60;
  let s=Math.floor(diff/1e3)%60;
  countdown.innerHTML=`<div><strong>${day}</strong><span>Days</span></div><div><strong>${h}</strong><span>Hours</span></div><div><strong>${m}</strong><span>Min</span></div><div><strong>${s}</strong><span>Sec</span></div>`;
}
setInterval(tick,1000);
tick();

d.schedule.forEach(x=>{
  timeline.innerHTML+=`<div class='time-row'><span>${x.title}</span><b>${x.time}</b></div>`;
});

let i=0;
setInterval(()=>{
  slide.classList.add('fade');
  setTimeout(()=>{
    i=(i+1)%d.gallery.length;
    slide.src='assets/'+d.gallery[i];
    slide.classList.remove('fade');
  },400);
},2000);

function sendRSVP(e){
  e.preventDefault();
  let txt=`Wedding RSVP%0AName: ${encodeURIComponent(guestName.value)}%0AGuests: ${encodeURIComponent(guestCount.value)}%0AMessage: ${encodeURIComponent(guestMessage.value)}`;
  window.open(`https://wa.me/${d.rsvpPhone}?text=${txt}`,'_blank');
}
