import { Component, OnInit } from '@angular/core';
// import { fromPromise } from 'rxjs/Observable/fromPromise'; 
// import { HttpHeaders } from '@angular/common/http';
// import { Storage } from '@ionic/storage';





@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent implements OnInit {

  public editInfo:boolean = false;

  // public profile: any = {user_name: '', user_email: ''};

  constructor(
    // private storage: Storage
  ) { }

  ngOnInit() {

  //   this.profile.editMyMainPage().subscribe( (profile) =>{

  //     this.profile = profile;
  //     console.log(profile);
      
  //  },
  // (error) =>{
  //   console.log(error);
    
  // });

  }


  // editMyMainPage()  {
  //   let profileURL = "http://globstage.com/api?action=";
  //   let data = {lang: 'en'};

  //   return fromPromise(this.storage.get('current_user'))
  //   .map((jwt)=>{
  //       console.log(jwt);
  //       return {
  //           headers: new HttpHeaders({
  //               "X-Jwt-Auth": "Bearer " + jwt.jwtToken
  //             }),
  //       };
        
  //   }).concatMap((options) => {
  //     return this.http.post(profileURL, data, options)
  //   });
    
  // }

  openInfo(){
    this.editInfo = true;
  }
}
