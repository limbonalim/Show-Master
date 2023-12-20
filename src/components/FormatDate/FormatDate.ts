export class FormatDate {
  private date: Date;
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(date: string) {
    this.date = new Date(date);
  }

  toStringFormatDate() {
    const month = this.months[this.date.getMonth()];
    const dayOfMonth = this.date.getDate();
    const year = this.date.getFullYear();
    return `${dayOfMonth} ${month}, ${year}`;
  }
}