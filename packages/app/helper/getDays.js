export function GetDays(timeStamp) {
    let daysPassed
    const days = Math.ceil(((new Date()) - (new Date(timeStamp.seconds*1000))) / (1000 * 3600 * 24))

    if (days === 0) {
        daysPassed = 'Today'
    }
    else if (days === 1) {
        daysPassed = 'Yesterday'
    }
    else {
        daysPassed = days + ' days ago'
    }

    return daysPassed
}