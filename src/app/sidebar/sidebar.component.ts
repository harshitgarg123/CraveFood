import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  template: '<p>Username: {{ username }}</p>'
})
export class SidebarComponent implements OnInit{

  username:string=" ";
  iscard:boolean=false;
  isprofile:boolean=false;


  constructor(private route: ActivatedRoute, private router:Router,) {
    this.route.paramMap.subscribe(params => {

      this.username = params.get('username')?.toString()??'';
    });
  }


  ngOnInit(): void { }

  profile(){
    // username:any=this.route.snapshot.paramMap.get('username')
    // const username=this.route.snapshot.paramMap.get('username');
    // this.user=username;
   // this.user= this.route.snapshot.paramMap.get('username')

  //  this.route.paramMap.subscribe(params => {
  //   this.user = params.get('username');
  // });
    
    this.isprofile=true;
  }


  card(){
    this.iscard=true;
  }
}
