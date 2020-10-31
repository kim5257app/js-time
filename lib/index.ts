import * as moment from 'moment';

function localTimeAsMoment(time: moment.MomentInput): moment.Moment {
  return moment.utc(time);
}

function localTime(time: moment.MomentInput): Date {
  return localTimeAsMoment(time).toDate();
}

function localTimeString(time: moment.MomentInput) {
  return localTimeAsMoment(time).local().format('YYYY-MM-DD HH:mm:ss');
}

function localDate(time: moment.MomentInput) {
  return localTimeAsMoment(time).local().format('YYYY-MM-DD');
}

export {
  localTime,
  localTimeString,
  localDate,
}
