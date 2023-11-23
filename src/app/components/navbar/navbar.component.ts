import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  searchTerm: string = '';

  constructor(private router: Router) {}

  buscar() {
    if (this.searchTerm.trim() !== '') {
      this.router.navigate(['/specificComponent', this.searchTerm]);
    }
  }

}
