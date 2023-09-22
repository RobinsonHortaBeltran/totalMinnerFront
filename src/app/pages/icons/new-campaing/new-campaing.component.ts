import { Component, OnInit } from '@angular/core';
import { CampaingService} from '../campaing.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
@Component({
  selector: 'app-new-campaing',
  templateUrl: './new-campaing.component.html',
  styleUrls: ['./new-campaing.component.scss']
})
export class NewCampaingComponent implements OnInit {

  registerCampaing: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    codigo: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
  });
  constructor(private api: CampaingService) { }

  ngOnInit() {
  }

  registerCampaingFunction(form: any): void {
  this.api.registerCampain(form);
  }
}
