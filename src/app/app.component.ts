import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    console.log(redirect)

    if (redirect) {
      this.router.navigateByUrl(redirect);
    }
  }
  title = 'my-portfolio';
}
