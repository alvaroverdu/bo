export class Usuario {

    constructor(
        public id: number,
        public username: string,
        public email: string,
        public name: number,
        public lastname: number,
        public rol: number,
        public picture: string,
        public active:boolean,
        public banned: boolean
    ) {}

}