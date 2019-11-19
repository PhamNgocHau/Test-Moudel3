import {Component, OnInit} from '@angular/core';
import {Awesome} from '../awesome';
import {Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-edit-awesome',
  templateUrl: './edit-awesome.component.html',
  styleUrls: ['./edit-awesome.component.css']
})
export class EditAwesomeComponent implements OnInit {
  isSuccess = false;
  awesomeForm: FormGroup;
  awesome: Awesome;
  sub: Subscription;

  constructor(
    private router: ActivatedRoute,
    private awesomeService: AwesomeService
  ) {
  }

  ngOnInit() {
    this.sub = this.router.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.getAwesome(id);
    });
  }

  getAwesome(id) {
    this.awesomeService.getAwesomeById(id).subscribe(next => {
      this.awesome = next;
    }, error => {
      console.log(error);
    });
  }

  onSubmit(awesomeForm) {
    this.awesomeService.editAwesome(awesomeForm.value).subscribe(result => {
      this.isSuccess = true;
      this.awesome = result;
    }, error => {
      this.isSuccess = false;
    });
  }
}
