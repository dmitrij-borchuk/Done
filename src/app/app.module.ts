import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FloatedPanelComponent } from './floated-panel/floated-panel.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FloatedPanelComponent,
    NewTaskFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
