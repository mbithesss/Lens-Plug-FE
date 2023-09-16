import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route matches the link's routerLink
        this.updateActiveStatus(event.url);
      }
    });
  }

  // Function to determine if a link should be marked as "current-page"
  isActive(route: string): boolean {
    return this.router.url === route;
  }

  // Function to update active status for all links
  updateActiveStatus(currentUrl: string): void {
    // You can update the class for each link based on the current URL here
  }
}



