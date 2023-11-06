import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'advance-routing';
  loginAsUser() {
    localStorage.setItem('login','true')
    localStorage.setItem('role','user')
  }
  loginAsAdmin() {
    localStorage.setItem('login','true')
    localStorage.setItem('role','admin')

  }
  logout(){
    localStorage.removeItem('login')
    localStorage.removeItem('role')
  }
}
