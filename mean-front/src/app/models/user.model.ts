export class User{
    constructor(
        public nombre:string,
        public cedula:string,
        public celular?:string,
        public img?:string
    ){}

    imprimirUsuario(){
        console.log(this.nombre)
    }

    get imageUrl(){
        if (this.img?.includes('https')) {
            return this.img;
        }
        if (this.img) {
            return `uploads path....`;
        }
        return ''
    }
}