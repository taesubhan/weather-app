// Converts a 24 hour time format (ex: 18:42) to a 12 hour format (6:42 pm)
export function convertTo12HourClock(time) {
    const timeObj = new Date(time);
    const hour = timeObj.getHours();
    const hours = (hour % 12) || 12;
    let minutes = timeObj.getMinutes();
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    const amOrPm = hour >= 12 ? 'pm' : 'am';

    return `${hours}:${minutes} ${amOrPm}`;
}