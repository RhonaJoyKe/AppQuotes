export class Quotes {
 
 
  showauthor: boolean;
  constructor(public id: number,public author: string,public createdby: string, public message:string){
    this.showauthor=false;

} 

}
