import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  username:string=" ";


  constructor(private route: ActivatedRoute, private router:Router,) {
    this.route.paramMap.subscribe(params => {

      this.username = params.get('username')?.toString()??'';
    });
  }



}
