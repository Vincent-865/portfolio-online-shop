import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import User from '../../models/User';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  public user: User;
  public userId: string | null;

  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute, private routerNavigation:Router){
    console.log(1);
    console.log(this.activatedRoute.snapshot.paramMap.keys);
    this.userId = this.activatedRoute.snapshot.paramMap.get('user_id');
    console.log(2);
    this.getUserByID();
  }

  getUserByID(){
    this.http.get(`http://localhost:8080/${this.userId}`).subscribe((result:any) => {
      this.user = result;
    })
  }

  deleteUserByID(){
    console.log("User ID: ", this.userId);
    this.http.delete(`http://localhost:8080/${this.userId}`).subscribe((result:any) => {
      console.log("Result: ", result);
      this.routerNavigation.navigateByUrl('');
    }, (error:any) => {
      console.log("Error: ", error);
    });
  }
}
