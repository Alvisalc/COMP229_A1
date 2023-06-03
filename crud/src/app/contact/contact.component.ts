import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

// export class ContactComponent {

// }

export class ContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sendMessage() {
    // Logic to handle sending the message

    // Redirect to the home page after sending the message
    this.router.navigate(['/home']);
  }
}