import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../awesome.service';
import {Awesome} from '../awesome';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {
  awesomeList: Awesome[];

  constructor(private awesomeService: AwesomeService) {
  }

  ngOnInit() {
    this.awesomeService.getAwesomeList().subscribe(result => {
      this.awesomeList = result;
    });
  }

  deleteAwesome(id) {
    this.awesomeService.deleteAwesome(id).subscribe(result => {
      this.updateDataAfterDelete(id);
    });
  }
  updateDataAfterDelete(id: number) {
    for (let i = 0; i < this.awesomeList.length; i++) {
      if (this.awesomeList[i].id === id) {
        this.awesomeList.splice(i, 1);
        break;
      }
    }
  }
}
