/*Angular core modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Components */
import { AppComponent } from './app.component';
import { SnackbarComponent } from './Store/SnackBarReducer/Component/snackbar/snackbar.component';


/* Custom modules */
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './MaterialModule/Material.module';
import { HttpClientModule } from '@angular/common/http';

/* Ngrx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SnackBarEffects } from './Store/SnackBarReducer/Facade/SnackBar.Effects';
import { SnackBarService } from './Store/SnackBarReducer/Service/SnackBar.Service';
import { SnackbarNotificationPipe } from './Store/SnackBarReducer/pipes/snackbar.pipe';

/*Third party modules */

@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
    SnackbarNotificationPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([SnackBarEffects]),
  
  ],
  providers: [SnackBarService],
  entryComponents: [SnackbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
