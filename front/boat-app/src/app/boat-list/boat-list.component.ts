import { Component, OnInit } from '@angular/core';
import { Boat } from '../model/boat-model';
import { BoatService } from '../service/boat-service';
import { MessageService } from '../service/message-service';
import { Router } from '@angular/router';

@Component({
             selector: 'app-boat-list',
             templateUrl: './boat-list.component.html',
             styleUrls: ['./boat-list.component.css']
           })
export class BoatListComponent implements OnInit{

  boats: Boat[] = [];

  constructor(private router: Router, private boatService: BoatService) {
  }

  ngOnInit(): void {
    this.getBoats();
  }

  private getBoats() {
    this.boatService.getBoats().subscribe(boats => this.boats = boats);
  }

  addBoat(){
    this.router.navigateByUrl('/boat-details/-1');
  }

}
