interface Device {
    id: string;
    name: string;
    last_app: string;
    connected: boolean;
    variables?: Object;
    functions?: string[];
    cc3000_patch_version?: string;
    product_id: number;
    last_heard: Date;
    requires_deep_update?: boolean;
    last_iccid?: string;
    imei?: string;
}

interface ApiConfig {
    token: string;
    devices: Device[];
}

export default ApiConfig;

export {
    Device
};
