
export interface UserInfo {
    fullName: string;
    accountType: AccountType;
    gravatar: any;
    role: string;
}

export enum AccountType {
    INDIVIDUAL = 'INDIVIDUAL',
    COMPANY = 'COMPANY'
}
