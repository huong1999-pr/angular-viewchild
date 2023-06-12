
import {
  Component,
  ViewChildren,
  AfterViewInit,
  QueryList,
  ViewChild,
} from '@angular/core';

import { HelloComponent } from '../app/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';
  @ViewChildren(HelloComponent) hellos: QueryList<any> | any;
  @ViewChild(HelloComponent, { static: false }) hello1: HelloComponent | undefined;
  ngAfterViewInit() {
    this.hellos.forEach((hello: any) => console.log(hello));
    console.log('Hello ', this.hello1);
  }
}
