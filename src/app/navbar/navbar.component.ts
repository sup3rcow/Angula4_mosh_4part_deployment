import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'; // !!! ne .prod, angular ce sam odabrati ako je prod

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  backgroundColor = environment.navBarBackgroundColor;

  constructor() { }

  ngOnInit() {
  }

}
