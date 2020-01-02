import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BookingService} from './../booking.service';

// import {DatepickerOptions} from '../../ng-datepicker/component/ng-datepicker.component';
// import * as enLocale from 'date-fns/locale/en';
// import * as frLocale from 'date-fns/locale/fr';


@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  bookingForm: FormGroup;
  submitted = false;
  msg: string = '';
  show: boolean = true;
  // options: string[] = ['Angular', 'React', 'Vue'];

  // options: DatepickerOptions = {
  //   locale: enLocale
  // };
  constructor(private formBuilder: FormBuilder, private _bookingService: BookingService) { }
  // private _bookingService: BookingService;
  public bookings = [];
  public employees = [];
  public errorMessage: '';
  ngOnInit() {

    this._bookingService.getBookings().subscribe((data) => {
      this.bookings = data;
      console.log(data);
  }, error => {
    this.errorMessage = error;
  });

  this._bookingService.postBooking()

  this._bookingService.getEmployees().subscribe((data) => {
      this.employees = data;
      console.log(data);
  }, error => {
    this.errorMessage = error;
  });

    this.bookingForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      departuredate: ['', Validators.required],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]]
  }, 
  // {
  //     validator: MustMatch('password', 'confirmPassword')
  // }
  );
  }

  get f() { return this.bookingForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.bookingForm.invalid) {
            return;
        }
        
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.bookingForm.value))
        this.msg = 'Form Submitted Successfully';
        this.show = !this.show;

        // submitted=true;
    }
}
