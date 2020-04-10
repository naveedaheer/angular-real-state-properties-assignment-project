import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { GalleryListComponent } from "./gallery/gallery.component";
import { GalleryDetailComponent } from "./gallery/gallery-detail.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "posts", component: PostListComponent },
  { path: "", component: PostListComponent },
  { path: "createPost", component: PostCreateComponent },
  { path: "edit/:postId", component: PostCreateComponent },
  { path: 'galleryDetail/:id', component: GalleryDetailComponent},
  { path: 'gallery', component: GalleryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
