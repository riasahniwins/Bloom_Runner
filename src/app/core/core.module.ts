/*core modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* components*/
import { AppComponent } from '../app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

/*interceptors*/
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../MaterialModule/Material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    RouterModule,
    FormsModule,
    MaterialModule,
    BrowserModule,
    HttpClientModule
  ],
  exports:[
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class CoreModule { }
