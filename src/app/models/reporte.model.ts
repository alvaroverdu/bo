export class Reporte {

    constructor(
        public id: number,
        public reason: string,
        public comments: string,
        public result: number,
        public status: number,
        public managed_by: number,
        public reported_user: number,
        public reporter_user:number
    ) {}

}