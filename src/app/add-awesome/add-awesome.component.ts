import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../awesome.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-awesome',
  templateUrl: './add-awesome.component.html',
  styleUrls: ['./add-awesome.component.css']
})
export class AddAwesomeComponent implements OnInit {
  isSuccess = false;

  constructor(private awesomeService: AwesomeService) {
  }

  awesomeForm: FormGroup;

  ngOnInit() {
    this.awesomeForm = new FormGroup({
      id: new FormControl(''),
      tag: new FormControl(''),
      url: new FormControl(''),
      descriptions: new FormControl('')
    });
  }

  onSubmit() {
    const awesome = this.awesomeForm.value;
    this.awesomeService.addAwesome(awesome).subscribe(result => {
      this.isSuccess = true;
    });
  }
}
