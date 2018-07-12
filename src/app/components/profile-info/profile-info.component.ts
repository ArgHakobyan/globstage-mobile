import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';



@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  public detailsToggle;
  public showInfo = true;
  public editInfo = false;
  public showPersonal = false;
  public editContact = false;
  public information: FormGroup = new FormGroup({});
  public contact: FormGroup = new FormGroup({});
  public personal: FormGroup = new FormGroup({});
  public user = {};

  @ViewChild('country') public countryElement: ElementRef;

  constructor(
    private userService: UserService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
    this.information = new FormGroup({
      user_gender: new FormControl(),
      user_date_of_birth: new FormControl(),
      marital_status: new FormControl(),
      user_country: new FormControl(),
      user_city: new FormControl(),
    });
  this.userService.getUser(JSON.parse(localStorage.getItem('globUser')).id).subscribe((user: any) => {
    this.user = user.body;
    user = user.body;
    this.information = new FormGroup({
      user_gender: new FormControl(user.user_gender),
      user_date_of_birth: new FormControl(user.user_date_of_birth),
      marital_status: new FormControl(user.marital_status),
      user_country: new FormControl(user.user_country),
      user_city: new FormControl(user.user_city),
    });
    console.log(this.user);
  });

  this.contact = new FormGroup({
    mobile: new FormControl(),
    twitter: new FormControl(),
    facebook: new FormControl(),
    skype: new FormControl(),
    website: new FormControl(),
  });
this.userService.getUser(JSON.parse(localStorage.getItem('globUser')).id).subscribe((user: any) => {
  this.user = user.body;
  user = user.body;
  this.contact = new FormGroup({
    mobile: new FormControl(user.mobile),
    twitter: new FormControl(user.twitter),
    facebook: new FormControl(user.facebook),
    skype: new FormControl(user.skype),
    website: new FormControl(user.website),
  });
  console.log(this.user);
});

this.personal = new FormGroup({
  Activities: new FormControl(),
  Interests: new FormControl(),
  Sports: new FormControl(),
  Interests1: new FormControl(),
  Activities1: new FormControl(),
  Interests2: new FormControl(),
  Interests3: new FormControl(),
  Interests4: new FormControl(),
});
this.userService.getUser(JSON.parse(localStorage.getItem('globUser')).id).subscribe((user: any) => {
this.user = user.body;
user = user.body;
this.personal = new FormGroup({
  Activities: new FormControl(user.mobile),
  Interests: new FormControl(user.twitter),
  Sports: new FormControl(user.facebook),
  Interests1: new FormControl(user.skype),
  Activities1: new FormControl(user.website),
  Interests2: new FormControl(user.facebook),
  Interests3: new FormControl(user.skype),
  Interests4: new FormControl(user.website),
});
console.log(this.user);
});



}

  show1Toggle() {
    this.detailsToggle = (this.detailsToggle === true) ? false : true;
  }

  editUserInfo() {
    this.showInfo = false;
    this.editInfo = true;

    // this.mapsAPILoader.load().then(
    //   () => {

    //    const autocomplete = new google.maps.places.Autocomplete(
    //     this.countryElement.nativeElement,
    //      { types: ['(regions)']
    //     });

    //     autocomplete.addListener('place_changed', () => {
    //     this.ngZone.run(() => {
    //      const place: google.maps.places.PlaceResult = autocomplete.getPlace();
    //      if (place.geometry === undefined || place.geometry === null ) {
    //       return;
    //      }
    //     });
    //     });
    //   }
    //      );
  }
  cancelEditInfo() {
    this.showInfo = true;
    this.editInfo = false;
  }
  editUserContact() {
    this.editContact = true;
  }
  cancelEditContact() {
    this.editContact = false;
  }
  editUserPersonal() {
    this.showPersonal = true;
  }
  cancelEditPersonal() {
    this.showPersonal = false;
  }

  saveInfo(information) {
    this.userService.updateUser(information.value).subscribe( data => {
      console.log(data);
    });


  }


}
