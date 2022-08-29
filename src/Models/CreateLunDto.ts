export class CreateLunDto {
    constructor(

        public LunName : string,
        public LunTotalSpace : number,
        public StorageID : number,
     
     ) {}
   }