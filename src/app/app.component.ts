import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration form ';
  displayName = "";
  displayAddress = "";
  displayEmail = "";
  displayPassword = "";

  getValue(name:string , address:string , email:string , password:string ){
    this.displayName=name;
    this.displayAddress=address;
    this.displayEmail=email;
    this.displayPassword=password;
  }
}
