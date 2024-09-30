import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import User from '../../../models/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-update',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './form-update.component.html',
  styleUrl: './form-update.component.css'
})
export class FormUpdateComponent {
  public user: User;
  public userId: string | null;

  constructor(private http:HttpClient, private routeNavigation:Router, private activatedRoute:ActivatedRoute){
    this.userId = this.activatedRoute.snapshot.paramMap.get('user_id');
    this.updateUserBlacklist();
  }

  updateUserBlacklist(){
    this.http.put(`http://localhost:8080/blacklist/${this.userId}`, '').subscribe((result:any) => {
      this.user = result;
      this.routeNavigation.navigateByUrl(`user/${this.userId}`)
    })
  }
}
