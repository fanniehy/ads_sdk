import api from '../services/api';

export default {
    getAdsResource () {
        api.getAdsResource('/fannie/jarkim', {});
    }
}