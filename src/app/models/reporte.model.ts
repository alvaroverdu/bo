export class Reporte {

    constructor(
        public id: number,
        public reason: string,
        public comments: string,
        public result: number,
        public status: number,
        public managedById: number,
        public reportedUserId: number,
        public reporterUserId:number,
        public createdAt: string,
        public updatedAt: string
    ) {}

}