export interface RegisterRequest {

    accountType: 'INDIVIDUAL' | 'COMPANY' | null;
    login: string | null;
    password: string | null;

    email: string | null;
    firstName: string | null;
    surname: string | null;

    companyName: string | null;
    nip: string | null;
    city: string | null;
    street: string | null;
    zipCode: string | null;
    homeNumber: string | null;

}
