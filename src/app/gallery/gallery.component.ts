import { Component, OnInit, OnDestroy } from "@angular/core";

import { ActivatedRoute, Router } from '@angular/router';
import { Gallery } from "./gallery.model";
import { GalleryService } from "./gallery.service";
import { AuthService } from "../auth/auth.service";
@Component({
  selector: "gallery-list",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryListComponent implements OnInit {
  gallery: Gallery[] = [];
  galleryLength;
  errorMessage: any;
  userIsAuthenticated: boolean;

  constructor(public galleryService: GalleryService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    //this.userIsAuthenticated = this.authService.getIsAuth();
    //console.log(this.userIsAuthenticated);
    this.galleryService.getImages().subscribe(
      gallery => {
        this.gallery = gallery;
        this.galleryLength = gallery.length;
      },
      error => this.errorMessage = <any>error
    );
  }
}
