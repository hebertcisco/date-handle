import moment from 'moment';

export class DateHandle {
  public day: number;
  constructor() {
    this.day = moment().weekday();
  }
  public dayOfWeek = (thisDay: number): boolean => {
    return this.day === thisDay;
  };
  public isSaturday = (): boolean => {
    return this.dayOfWeek(6);
  };
  public isSunday = (): boolean => {
    return this.dayOfWeek(0);
  };
  public isMonday = (): boolean => {
    return this.dayOfWeek(1);
  };
  static future(many: number | Date | any, timeType?: 'days' | 'months' | 'years'): string | any {
    switch (timeType) {
      case 'days':
        return moment().add(many, 'days').format('YYYY-MM-DD');
      case 'months':
        return moment().add(many, 'months').format('YYYY-MM-DD');
      case 'years':
        return moment().add(many, 'years').format('YYYY-MM-DD');
    }
  }
  static futureFully(many: number | Date | any, timeType?: 'days' | 'months' | 'years'): string | any {
    switch (timeType) {
      case 'days':
        return this.future(many, 'days').format('YYYY-MM-DD HH:mm:ss');
      case 'months':
        return this.future(many, 'months').format('YYYY-MM-DD HH:mm:ss');
      case 'years':
        return this.future(many, 'years').format('YYYY-MM-DD HH:mm:ss');
    }
  }
  static past(many: number | Date | any, timeType?: 'days' | 'months' | 'years'): string | any {
    switch (timeType) {
      case 'days':
        return moment().subtract(many, 'days').format('YYYY-MM-DD');
      case 'months':
        return moment().subtract(many, 'months').format('YYYY-MM-DD');
      case 'years':
        return moment().subtract(many, 'years').format('YYYY-MM-DD');
    }
  }
  static pastFully(many: number | Date | any, timeType?: 'days' | 'months' | 'years'): string | any {
    switch (timeType) {
      case 'days':
        return moment().subtract(many, 'days').format('YYYY-MM-DD HH:mm:ss');
      case 'months':
        return moment().subtract(many, 'months').format('YYYY-MM-DD HH:mm:ss');
      case 'years':
        return moment().subtract(many, 'years').format('YYYY-MM-DD HH:mm:ss');
    }
  }
  static date = {
    y: moment().format('YYYY'),
    m: moment().format('MM'),
    d: moment().format('DD'),
    now: moment().format('YYYY-MM-DD'),
    nowFully: moment().format('YYYY-MM-DD HH:mm:ss'),
    h: moment().format('HH:mm:ss'),
  };
  static yesterday = (): string => moment().subtract(1, 'days').format('YYYY-MM-DD');
}
