const date = new Date();
function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}
const newDate = addDays(date, 14).getTime();

let second = null;
let minute = null;
let hour = null;
let day = null;

const x = setInterval(function(){

    let now = new Date().getTime();

    let distance = newDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.round((distance % (1000 * 60)) / 1000)-1;


    if(second === null){
        second = seconds;
        updateTimeCards('second',second)
    }else if (second != seconds){
        second = seconds;
        updateTimeCards('second',second)
    }
    if(minute === null){
        minute = minutes;
        updateTimeCards('minute',minute)
    }else if (minute != minutes){
        minute = minutes;
        updateTimeCards('minute',minute)
    }
    if(hour === null){
        hour = hours;
        updateTimeCards('hour',hour);
    }else if (hour != hours){
        hour = hours;
        updateTimeCards('hour',hour);
    }
    if(day === null){
        day = days;
        updateTimeCards('day',day);
    }else if (day != days){
        day = days;
        updateTimeCards('day',day);
    }

    if(distance < 0) {
        clearInterval(x);
        console.log('Ended!!!')
    }

},1000);

let parent_second = document.querySelector('#second');
let parent_minute = document.querySelector('#minute');
let parent_hour = document.querySelector('#hour');
let parent_day = document.querySelector('#day');

parent_second.addEventListener('transitionend',(e)=>{
    let flip_front = parent_second.children[2].children[1].children[0];
    let back_down = parent_second.children[1].children[1].children[0];

    if(e.propertyName == 'transform'){

        if(second < 10){
            flip_front.innerText = `0${second}`;
            back_down.innerText = `0${second}`;
        }else{
            flip_front.innerText = second;
            back_down.innerText = second;
        }
        parent_second.classList.remove('flipping');
    }

});

parent_minute.addEventListener('transitionend',(e)=>{
    let flip_front = parent_minute.children[2].children[1].children[0];
    let back_down = parent_minute.children[1].children[1].children[0];

    if(minute < 10){
        flip_front.innerText = `0${minute}`;
        back_down.innerText = `0${minute}`;
    }else{
        flip_front.innerText = minute;
        back_down.innerText = minute;
    }

    parent_minute.classList.remove('flipping');
});

parent_hour.addEventListener('transitionend',(e)=>{
    let flip_front = parent_hour.children[2].children[1].children[0];
    let back_down = parent_hour.children[1].children[1].children[0];

    if(hour < 10){
        flip_front.innerText = `0${hour}`;
        back_down.innerText = `0${hour}`;
    }else{
        flip_front.innerText = hour;
        back_down.innerText = hour;
    }

    parent_hour.classList.remove('flipping');
});

parent_day.addEventListener('transitionend',(e)=>{
    let flip_front = parent_day.children[2].children[1].children[0];
    let back_down = parent_day.children[1].children[1].children[0];

    if(day < 10){
        flip_front.innerText = `0${day}`;
        back_down.innerText = `0${day}`;
    }else{
        flip_front.innerText = day;
        back_down.innerText = day;
    }

    parent_day.classList.remove('flipping');
});


function updateTimeCards(type,time){
    switch(type){
        case 'second':
            let values_second = {
                back_up:parent_second.children[1].children[0].children[0],
                flip_back:parent_second.children[2].children[0].children[0]
            };
            parent_second.classList.add('flipping');
            if(time < 10){
                values_second.back_up.innerText = `0${time}`;
                values_second.flip_back.innerText = `0${time}`;
            }else{
                values_second.back_up.innerText = time;
                values_second.flip_back.innerText = time;
            }
        break;
        case 'minute':
            let values_minute = {
                back_up:parent_minute.children[1].children[0].children[0],
                flip_back:parent_minute.children[2].children[0].children[0]
            };
            parent_minute.classList.add('flipping');
            if(time < 10){
                values_minute.back_up.innerText = `0${time}`;
                values_minute.flip_back.innerText = `0${time}`;
            }else{
                values_minute.back_up.innerText = time;
                values_minute.flip_back.innerText = time;
            }
        break;
        case 'hour':
            let values_hour = {
                back_up:parent_hour.children[1].children[0].children[0],
                flip_back:parent_hour.children[2].children[0].children[0]
            };
            parent_hour.classList.add('flipping');
            if(time < 10){
                values_hour.back_up.innerText = `0${time}`;
                values_hour.flip_back.innerText = `0${time}`;
            }else{
                values_hour.back_up.innerText = time;
                values_hour.flip_back.innerText = time;
            }
        break;
        case 'day':
            let values_day = {
                back_up:parent_day.children[1].children[0].children[0],
                flip_back:parent_day.children[2].children[0].children[0]
            };
            parent_day.classList.add('flipping');
            if(time < 10){
                values_day.back_up.innerText = `0${time}`;
                values_day.flip_back.innerText = `0${time}`;
            }else{
                values_day.back_up.innerText = time;
                values_day.flip_back.innerText = time;
            }
        break
    }
}