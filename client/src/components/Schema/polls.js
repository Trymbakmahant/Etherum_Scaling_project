

collection Post{
  id : string  ; 
  caption : string ;
  user : string ; 
  imagelink ? : string ; 
  polls? : string[] ;

  constructor(id:string , caption : string , user :string){
    this.id = id ;
    this.caption = caption ; 
    this.user = user; 
  } 

  ImagelinkUpdate(imagelink : string){
    this.imagelink  = imagelink ;
  } 

  PollsUpdate(polls : string[]) {
    this.polls = polls ;
  }
}