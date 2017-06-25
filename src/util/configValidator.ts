import ApiConfig from '../ApiConfig';

function isApiConfig(object: any): object is ApiConfig {
    return 'token' in object && 'devices' in object;
}

function validate(config: object): boolean {
    if (Object.getOwnPropertyNames(config).length === 0) {
        return false;
    }
    else if (!isApiConfig(config)) {
        return false;
    }
    return true;
}

export {
    validate
};
