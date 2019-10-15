// import SDKRequest = require("../common/SDKRequest");
import { GetVideoResource } from '../VideoResource/getVideoResource';

module.exports = {
    init: (interfaceName: string) => {
        console.log(`interface: ${interfaceName}`);
    },
    getVideoResource: () => {
        const data = {
            interfaceName: 'getVideoResource',
            requestParam: {
                videoName: 'jarkim_sdk',
                videoUrl: 'http://localhost:1311/',
            }
        }
        let getResource = new GetVideoResource(data);
        getResource.get()
    }
}