
export const utilService = {
    delay,
    getRandomInt,
    makeId,
    getFormattedDate
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getFormattedDate(timestamp) {

    var a = new Date(timestamp);
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var date = a.getDate();
    var hour = a.getHours(); 
    var minute = a.getMinutes(); 

    var time = date + '/' + month + '/' + year + ' ' + hour + ':' + minute; 
    return time;
  
  }