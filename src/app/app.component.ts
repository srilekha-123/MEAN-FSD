import { Component } from '@angular/core';

 @Component({
 selector: 'app-root',
 template: `
 <img [src]="myPic"/>
 <br>
 <button [disabled]="isEnabled">Click me</button><hr>
 <button disabled="{!isEnabled}">Click me</button><br>
 <p [ngClass]="className">This is cool stuff</p>
 `,
 styles: [` img {
            height: 1000px;
            width: auto;
            }
 .myClass {
 color: red;
 font-size: 24px;
 }
 `]
 })
 export class AppComponent {
 myPic: string = "../assets/snow.jpg";
 isEnabled: boolean = false;
 className: string = "myClass";
 }