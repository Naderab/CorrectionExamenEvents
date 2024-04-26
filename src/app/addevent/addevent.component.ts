import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventsServiceService } from '../events-service.service';
import { event } from '../event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css'],
})
export class AddeventComponent {

  constructor(private eService: EventsServiceService,private r : Router) {
  
}

  event = new FormGroup({
    name: new FormControl(""),
    nbParticipant: new FormControl(0, [Validators.max(1000)]),
    price: new FormControl(0, [Validators.min(0)]),
    Category: new FormControl('', [Validators.pattern("event_traditionnel|event_culturel|event_moderne")]),
  });

  add() {

    this.eService.addEvent(this.event.value as event).subscribe({
      next: () => this.r.navigate(['/events']),
      error: (e)=> console.log(e)
    })
    
  }
}
