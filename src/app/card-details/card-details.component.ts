import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  cardId!: number;
  cardDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private location: Location, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.cardId = +params.get('id')!;
      this.fetchCardDetails(this.cardId);
    });
  }

  fetchCardDetails(id: number) {
    const url = `https://reqres.in/api/users/${id}`;

    this.http.get(url)
      .subscribe((response: any) => {
        this.cardDetails = response.data;
      });
  }

  goBack() {
    // this.location.back();
    this.router.navigate(['users']);
  }
}


