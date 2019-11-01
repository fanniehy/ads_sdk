declare interface IDevice {
    /**
     * 获取设备唯一ID
     */
    udid(): string;
    /**
     * 纬度
     */
    lat(): number;
    /**
     * 经度
     */
    lon(): number;
    locationProvider(): number;
    osType(): number;
}
