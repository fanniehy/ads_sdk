interface getVideoResource {
    interfaceName: string,
    requestParam: Object,
};


class SDKRequest {
    interfaceName: string;
    requestParam: Object;
    constructor(data: getVideoResource) {
        this.interfaceName = data.interfaceName
        this.requestParam = data.requestParam
    }
    get() {
        const body = {
            interface: this.interfaceName,
            data: this.requestParam,
        };
        console.log(body);
        return body;
    }
}

export = SDKRequest;