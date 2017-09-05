export default class BrowserHelper {
  static isAndroid(): boolean {
    if ( /Android/i.test(navigator.userAgent) ) {
      return true;
    }
    return false;
  }

  static isIos(): boolean {
    if ( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
      return true;
    }
    return false;
  }

  static isMobile(): boolean {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return true;
    }
    return false;
  }
}
