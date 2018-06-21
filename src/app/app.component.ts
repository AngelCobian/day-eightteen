import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  bools: boolean[] = [ true , false];
  nums: number[] = [1, 2.5, 5];
  strs: string[] = ['hey', 'there'];
  test = {
    id: 1,
    name: 'test',
  };
  user: object = {
    id: 2,
    name: 'user',
  };
  objs: object[] = [{
    'test':{
      'id': 1,
      'name': 'test'
    },
    'user': {
      'id': 2,
      'name': 'user',
      'active': false,
    }
    }];
    types: any[] = [true, 1, 'test', this.user];
    // test2 = typeof this.nums;

    ngOnInit() {
      console.log(this.getTypeof(this.types[0]));
  }
  getTypeof(types){
    return typeof types;
  }
}


