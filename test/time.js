const expect = require('chai').expect;
const time = require('../dist');

describe('기본 시험', () => {
  it('localTime 시험', () => {
    const date = time.localTime('2020-10-30T10:42:32.000Z');
    expect(date.getTimezoneOffset()).to.equal(-540);
  });

  it('localTimeString 시험', () => {
    const date = time.localTimeString('2020-10-30T10:42:32.000Z');
    expect(date).to.equal('2020-10-30 19:42:32');
  });

  it('localDate 시험 (같은 날)', () => {
    const date = time.localDate('2020-10-30T10:42:32.000Z');
    expect(date).to.equal('2020-10-30');
  });

  it('localDate 시험 (다음 날)', () => {
    const date = time.localDate('2020-10-30T15:42:32.000Z');
    expect(date).to.equal('2020-10-31');
  });
});
