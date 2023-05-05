import { Component, Input, OnInit } from '@angular/core';
import { Boat } from '../model/boat-model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoatService } from '../service/boat-service';

@Component({
             selector: 'app-boat-details',
             templateUrl: './boat-details.component.html',
             styleUrls: ['./boat-details.component.css']
           })
export class BoatDetailsComponent implements OnInit{

  @Input() boat?: Boat;
  boatForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private boatService: BoatService) {
  }

  ngOnInit(): void {
    this.getBoat();
  }

  backToList() {
    this.router.navigateByUrl('/boat-list');
  }

  getBoat(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id == -1){
      this.boat = new Boat();
      this.initFormGroup();
    } else{
      this.boatService.getBoat(id)
          .subscribe(b => {
            this.boat = b;
            this.initFormGroup();
          });
    }
  }

  addBoat() {
    if(!!this.boat){
      this.boatService.addBoat(this.boat).subscribe(b => {
        this.boat = b;
        this.router.navigateByUrl('/boat-list');
      });
    }
  }

  updateBoat() {
    if(!!this.boat){
      this.boatService.updateBoat(this.boat).subscribe(b => this.boat = b);
    }
  }

  deleteBoat() {
    if(!!this.boat && !!this.boat.id){
      this.boatService.deleteBoat(this.boat.id).subscribe(() => this.router.navigateByUrl('/boat-list'));
    }
  }

  get nameCtrl() {
    if(!!this.boatForm){
      return this.boatForm.get('name');
    }
    return null;
  }

  get descriptionCtrl() {
    if(!!this.boatForm){
      return this.boatForm.get('description');
    }
    return null;
  }

  changeName(event: any) {
    if(!!this.boat){
      this.boat.name = event.target.value;
    }
  }

  changeDescription(event: any) {
    if(!!this.boat){
      this.boat.description = event.target.value;
    }
  }

  private initFormGroup() {
    this.boatForm = new FormGroup({
                                    name: new FormControl(this.boat?.name, Validators.required),
                                    description: new FormControl(this.boat?.description, Validators.required)
                                  });
  }

}
