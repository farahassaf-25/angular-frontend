import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  searchUser(event: Event) {
    const target = event.target as HTMLInputElement;
    const userId = target.value.trim();

    if (userId !== '') {
      const id = +userId;
      if (!isNaN(id)) {
        this.router.navigate(['/card-details', id]);
      }
    }
  }
}

