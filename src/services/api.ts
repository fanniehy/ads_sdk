import HttpBasic from '../libraries/HttpBasic';

export default {
    getAdsResource(interfaceName: string, data: Record<string, any>) {
        HttpBasic.get(interfaceName, data);
    },
};
