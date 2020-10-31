"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDate = exports.localTimeString = exports.localTime = void 0;
const moment = require("moment");
function localTimeAsMoment(time) {
    return moment.utc(time);
}
function localTime(time) {
    return localTimeAsMoment(time).toDate();
}
exports.localTime = localTime;
function localTimeString(time) {
    return localTimeAsMoment(time).local().format('YYYY-MM-DD HH:mm:ss');
}
exports.localTimeString = localTimeString;
function localDate(time) {
    return localTimeAsMoment(time).local().format('YYYY-MM-DD');
}
exports.localDate = localDate;
