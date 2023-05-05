import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Angular JS Bindings!</h1><br>
            <span>{{str1}} :{{name}}</span><br>
            <span>To Day Current Date:{{today}}</span>
            <img src="{{imageSrc}}" />
            <br>
            <p>{{str2 + getLikes(likes)}}</p>
  `,
  styles:[`
  h1,span {
                font-weight: bold;
                border: 1px ridge blue;
                padding: 5px;
                background-color:green;
  }
  img{
     width: 300px;
     height: auto;
     }
     p{
     font-size: 35px;
     color: darkBlue;
    }


  `]

})
export class AppComponent {
  title = 'rvr';
  today : Date;
  constructor(){
    this.today=new Date();
  }
  str1: string = "Hello my name is"
  name: string = "Srilekha"
  str2: string = "I like to"
  likes: string[] = ['Cycle', "Bike", "Jeep"]
  
  getLikes = function(arr: any){
  var arrString = arr.join(", ");
  return " " + arrString
   }
   imageSrc: string = "../assets/snow.jpg";
}
