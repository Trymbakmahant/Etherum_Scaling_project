

@public
collection User {

  id: string;
   profile :string ; 
  tagline : string ; 
  follower? : number ;
   name: string; 
 
  
  constructor (id: string,name: string , profile :string , tagline : string) {

    this.id = id;
    
    this.name = name;
      this.profile = profile ; 
    this.tagline = tagline ; 
    
  }

  followUp() {
    this.follower += 1 ;
  }

  followDown(){
    this.follower -= 1 ;
  }
  // You can add your own functions to determine rules
  // on who can update the records da
} 
