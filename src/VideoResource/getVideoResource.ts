import SDKRequest = require("../common/SDKRequest");

export class GetVideoResource extends SDKRequest {
    getVideoResource() {
        this.get();
    }
}