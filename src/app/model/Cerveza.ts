export default interface Cerveza{
    name:string;
    description:string;
    image_url:string;
}

export default class ClaseCerveza{
    public name:string;
    public description:string;
    public image_url:string;

    constructor(name:string,description:string,image_url:string){

        this.name=name;
        this.description=description;
        this.image_url=image_url;
    }
}

