import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-foodcard',
  templateUrl: './foodcard.component.html',
  styleUrls: ['./foodcard.component.scss']
})
export class FoodcardComponent {

  username:string=" ";


  constructor(private route: ActivatedRoute, private router:Router,) {
    this.route.paramMap.subscribe(params => {

      this.username = params.get('username')?.toString()??'';
    });
  }

}
