import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PostAttiviComponent } from './component/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './component/post-inattivi/post-inattivi.component';


const routes: Routes[]= [
  {path: "home",
  component: HomeComponent
},
{path: "Post Attivi",
  component: PostAttiviComponent
},
{path: "Post Inattivi",
  component: PostInattiviComponent
},
{path: "**",
  component: HomeComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostAttiviComponent,
    PostInattiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
