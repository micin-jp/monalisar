export class Logger {

  static log(...value: any[]): void {
    console.log(value);
  }

  static info(...value: any[]): void {
    console.info(value);
  }

  static warn(...value: any[]): void {
    console.warn(value);
  }

  static error(...value: any[]): void {
    console.error(value);
  }
}
