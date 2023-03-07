export class UserModel {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;

    constructor(first: string, last: string, user: string, email: string, password: string) {
        this.first_name = first;
        this.last_name = last;
        this.username = user;
        this.email = email;
        this.password = password;
    }
}