import { Component } from '@angular/core';
import { EventsServiceService } from '../events-service.service';
import { event } from '../event';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  listEvents: event[] = [];
  searchText: FormControl = new FormControl();
  listEventsFiltred : event[]=[]
  constructor(private eService: EventsServiceService) {
    this.eService.getEvents().subscribe({
      next: (data) => { this.listEvents = data;this.listEventsFiltred = this.listEvents; },
    });
  }

  deleteEvent(id: number) {
    this.eService.deleteEvent(id).subscribe({
      next: () => {
        this.listEvents = this.listEvents.filter((e) => e.id != id)
        
      },
    });
  }

  Search() {
    this.listEventsFiltred = this.listEvents.filter(
      (e) => e.Category == this.searchText.value
    );
  }
}
