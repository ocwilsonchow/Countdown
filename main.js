const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

const countdown = () => {
  const countDate = new Date('July 28, 2021 17:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

//
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
//

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector('.day').innerText = textDay;
  document.querySelector('.hour').innerText = textHour;
  document.querySelector('.minute').innerText = textMinute;
  document.querySelector('.second').innerText = textSecond;


  console.log(gap);


const countdown = () => {
const countDate = new Date('August 9, 2021 17:30:21').getTime();
const now = new Date().getTime();
const gap = countDate - now;

//
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
//

const textDay = Math.floor(gap / day);
const textHour = Math.floor((gap % day) / hour);
const textMinute = Math.floor((gap % hour) / minute);
const textSecond = Math.floor((gap % minute) / second);

document.querySelector('.hk-day').innerText = textDay;
document.querySelector('.hk-hour').innerText = textHour;
document.querySelector('.hk-minute').innerText = textMinute;
document.querySelector('.hk-second').innerText = textSecond;


console.log(gap);

const countdown = () => {
const countDate = new Date('August 30, 2021 23:59:59').getTime();
const now = new Date().getTime();
const gap = countDate - now;

//
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
//

const textDay = Math.floor(gap / day);
const textHour = Math.floor((gap % day) / hour);
const textMinute = Math.floor((gap % hour) / minute);
const textSecond = Math.floor((gap % minute) / second);

document.querySelector('.ht-day').innerText = textDay;
document.querySelector('.ht-hour').innerText = textHour;
document.querySelector('.ht-minute').innerText = textMinute;
document.querySelector('.ht-second').innerText = textSecond;


console.log(gap);


};

setInterval(countdown, 500); };

setInterval(countdown, 500); };

setInterval(countdown, 500);



