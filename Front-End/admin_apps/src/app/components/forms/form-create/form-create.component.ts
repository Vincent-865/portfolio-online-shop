import { Component } from '@angular/core';
import User from '../../../models/User';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css'
})
export class FormCreateComponent {
  constructor(private http:HttpClient, private route:Router){}

  insertUser(data:User){
    this.http.post('http://localhost:8080/', data).subscribe((result:any) => {
      console.log("Insert Succeed: ", result);
      this.route.navigateByUrl('');
    })
  }
}
