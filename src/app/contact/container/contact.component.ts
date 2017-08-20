import { Component, OnInit } from '@angular/core';

// Services
import { HttpApiService } from '../../services/http-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss'],
  providers: [HttpApiService]
})
export class ContactComponent implements OnInit {

  users: any;

  constructor(private api: HttpApiService) {
    this.api.getUsers().subscribe(users => {
      this.users = users.data;
    });
  }

  ngOnInit() {
  }

}
