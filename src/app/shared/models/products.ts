export interface Iproducts {
    pName: string;
    pId: string;
    pStatus: IpStatus;
};

export type IpStatus = 'delivered' | 'in progress' | 'dispatched';