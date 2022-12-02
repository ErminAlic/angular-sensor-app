import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-add-sensors-data',
  templateUrl: './add-sensors-data.component.html',
  styleUrls: ['./add-sensors-data.component.scss']
})
export class AddSensorsDataComponent implements OnInit {

  constructor(public storeService: StoreService, private formBuilder: UntypedFormBuilder, public backendService: BackendService) { }
  public sensorenDataForm: any;
  public showAddTask: boolean = false;
  loading = false;
  sensorId = new FormControl<Number | null>(null, Validators.required);
  date = new FormControl<Date | null>(null, Validators.required);
  temperature = new FormControl<Number | null>(null, [Validators.required]);
  humidity = new FormControl<Number | null>(null, [Validators.required, Validators.min(0), Validators.max(100)]);

  ngOnInit(): void {
    this.sensorenDataForm = this.formBuilder.group({
      sensorId: this.sensorId,
      temperature: this.temperature,
      humidity: this.humidity,
      date:  this.date
    });
  }

  async onSubmit() {
    if(this.sensorenDataForm?.valid) {
      this.loading = true;
      await this.backendService.addSensorsData(this.sensorenDataForm.value);
      this.sensorenDataForm.reset();
      this.showAddTask = false;
      this.loading = false;
    }
  }

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
  }

}
