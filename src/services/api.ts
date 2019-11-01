import HttpBasic from '../libraries/HttpBasic';

export default {
    getAdsResource(interfaceName: string, data: Object) {
        HttpBasic.get(interfaceName, data);
        return 'getAdsResource';
    }
}