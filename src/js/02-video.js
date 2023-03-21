// import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// const currentTimeOptions = {
//     duration: 61.857,
//     percent: 0.049,
//     seconds: 3.034,
// }
function currentTime({seconds}) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(`${seconds}`));
};
player.on('timeupdate', throttle(currentTime, 1000)); 

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
