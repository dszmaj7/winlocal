export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website?: string;
    address?: Address;
    company?: Company;
};

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
