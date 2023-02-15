/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    let rooms = 0;
    let endPointer = 0;

    const starts = intervals
        .sort((a, b) => a[0] - b[0])
        .map(time => time[0]);

    const ends = [...intervals]
        .sort((a, b) => a[1] - b[1])
        .map(time => time[1]);

    for (let i = 0; i < intervals.length; i++) {
        if (starts[i] < ends[endPointer]) {
            rooms++;
        } else {
            endPointer++;
        }
    }

    return rooms;
};