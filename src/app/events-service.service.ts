import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventsServiceService {

  constructor(private http: HttpClient) { }
  
  getEvents() { 
    return this.http.get<event[]>("http://localhost:3000/events")
  }
  
  deleteEvent(id: number) {
   return this.http.delete<event>('http://localhost:3000/events/'+id);

   }
  
  addEvent(event: event) {
    
   return this.http.post<event>('http://localhost:3000/events',event);

  }
}
