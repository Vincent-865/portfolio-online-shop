import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import User from '../../models/User';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public users: User[] = [];

  constructor(private http:HttpClient){
    this.getAllUsers();
  }

  getAllUsers(){
    this.http.get('http://localhost:8080/').subscribe((result:any) => {
      this.users = result;
    })
  }
}
