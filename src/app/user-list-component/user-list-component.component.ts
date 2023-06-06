import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponent implements OnInit {
  userList: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const totalPages = 2; // Update this with the actual total number of pages
    this.fetchAllUsers(totalPages);
  }

  fetchAllUsers(totalPages: number) {
    for (let page = 1; page <= totalPages; page++) {
      this.fetchUsers(page);
    }
  }

  fetchUsers(page: number) {
    const url = `https://reqres.in/api/users?page=${page}`;

    this.http.get(url).subscribe((response: any) => {
      this.userList.push(...response.data);
    });
  }

  viewCardDetails(cardId: number) {
    this.router.navigate(['card-details', cardId]);
  }
}
