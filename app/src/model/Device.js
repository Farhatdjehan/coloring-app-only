export const DEVICE = 'TABLE_DEVICE'

export class Device {
    constructor(device_id, device_token, language, device_name, device_os, os_version, time_expired, is_agreed) {
        this.device_id = device_id;
        this.time_expired = time_expired;
        this.device_token = device_token;
        this.language = language;
        this.device_name = device_name;
        this.device_os = device_os;
        this.os_version = os_version;
        this.is_agreed = is_agreed;
    }

}

Device.schema = {
    name: DEVICE,
    primaryKey: 'device_id',
    properties: {
        device_id: {type: 'string'},
        time_expired: {type: 'double?'},
        device_token: {type: 'string?'},
        language: {type: 'string?'},
        device_name: {type: 'string?'},
        device_os: {type: 'string?'},
        os_version: {type: 'string?'},
        is_agreed: {type: 'bool?', default: false},
    }
};

