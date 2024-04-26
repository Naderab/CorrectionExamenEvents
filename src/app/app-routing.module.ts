import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AddeventComponent } from './addevent/addevent.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [{ path: 'events', component: EventsComponent },
  { path: 'addevent', component: AddeventComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
