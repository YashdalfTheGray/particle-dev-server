import ApiConfig, { Device } from '../ApiConfig';

function isApiConfig(object: any): object is ApiConfig {
    return 'token' in object && 'devices' in object;
}

function isDevice(object: any): object is Device {
    return 'id' in object &&
        'name' in object &&
        'last_app' in object &&
        'connected' in object &&
        'product_id' in object &&
        'last_heard' in object;
}

function validate(config: object): boolean {
    if (Object.getOwnPropertyNames(config).length === 0) {
        return false;
    }
    else if (!isApiConfig(config)) {
        return false;
    }

    const areAllDevicesValid = config.devices.reduce((acc, d) => {
        return isDevice(d);
    }, false);

    return config.devices.length === 0 ? true : areAllDevicesValid;
}

export {
    validate
};
