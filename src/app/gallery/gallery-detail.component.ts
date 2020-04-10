import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";


import { ActivatedRoute, Router } from '@angular/router';

import { GalleryService } from "./gallery.service";
import { Gallery } from "./gallery.model";

@Component({
  selector: "app-gallery-detail",
  templateUrl: "./gallery-detail.component.html",
  styleUrls: ["./gallery-detail.component.css"]
})

export class GalleryDetailComponent implements OnInit {

  gallery: Gallery[] = [];
  galleryLength;
  errorMessage: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private galleryService: GalleryService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getGallery(id);
    }
  }

  getGallery(id: string) {
    this.galleryService.getIndividualGallery(id).subscribe(
      gallery => this.gallery = gallery,
      error => this.errorMessage = <any>error);
      this.galleryLength = this.gallery.length;
  }

  onBack(): void {
    this.router.navigate(['/gallery']);
  }
}
