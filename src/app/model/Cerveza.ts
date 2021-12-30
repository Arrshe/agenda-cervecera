export default interface Cerveza{
    id:number;
    name:string;
    description:string;
    image_url:string;
}

export default class ClaseCerveza{
    public id:number
    public name:string;
    public description:string;
    public image_url:string;

    constructor(id:number,name:string,description:string,image_url:string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.image_url=image_url;
    }
    toString(){
        return this.id && this.name && this.description && this.image_url;
    }
}

