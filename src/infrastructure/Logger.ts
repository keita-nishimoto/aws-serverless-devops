/**
 * Logger
 * ログレベルはRFC 5424に準拠する
 *
 * @author keita-koga
 * @since 2018-02-20
 * @link https://tools.ietf.org/html/rfc5424
 */
export class Logger {

  /**
   * 0 Emergency (RFC5424)
   * システムが稼働出来ないくらい重大なエラー発生時に使用
   *
   * @param value
   */
  public static emergency(value: any) {
    const logLevel = 'EMERGENCY';
    console.trace(logLevel, value);
  }

  /**
   * 1 Alert (RFC5424)
   * システム管理者に通知が必要なエラー発生時に利用
   *
   * @param value
   */
  public static alert(value: any) {
    const logLevel = 'ALERT';
    console.trace(logLevel, value);
  }

  /**
   * 2 Critical (RFC5424)
   * 重大なエラー発生時に利用
   *
   * @param value
   */
  public static critical(value: any) {
    const logLevel = 'CRITICAL';
    console.trace(logLevel, value);
  }

  /**
   * 3 Error (RFC5424)
   * エラー発生時に利用
   *
   * @param value
   */
  public static error(value: any) {
    const logLevel = 'ERROR';
    console.trace(logLevel, value);
  }

  /**
   * 4 Warning (RFC5424)
   * エラーではないが何か良くない事が起きている時に利用
   *
   * @param value
   */
  public static warning(value: any) {
    const logLevel = 'WARNING';
    console.trace(logLevel, value);
  }

  /**
   * 5 Notice (RFC5424)
   *
   * @param value
   */
  public static notice(value: any) {
    const logLevel = 'NOTICE';
    console.trace(logLevel, value);
  }

  /**
   * 6 Informational (RFC5424)
   *
   * @param value
   */
  public static informational(value: any) {
    const logLevel = 'INFORMATIONAL';
    console.trace(logLevel, value);
  }

  /**
   * 7 Debug (RFC5424)
   *
   * @param value
   */
  public static debug(value: any) {
    const logLevel = 'DEBUG';
    console.trace(logLevel, value);
  }
}
