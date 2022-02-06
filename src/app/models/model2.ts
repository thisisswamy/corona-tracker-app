export class Model2 {
    constructor(
        public state:string,
        public country:string,
        public reportedCases:number,
        public previousDayCases:number,
        public difference:number,
    ){

    }
}