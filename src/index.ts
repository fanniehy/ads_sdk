declare interface Options {
  packageName: string;
  appVersion: string;
}

class WinApk {
  static init(options: Options): void {

  }

  static fetch(): Promise<AdResponse> {
    const req = new AdRequest();
    return Promise.reject();
  }
}

export default WinApk;
