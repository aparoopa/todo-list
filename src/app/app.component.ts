import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  item: any = '';
  item2:any = '';
  list: Array<any> = [];
  delList: Array<any> = [];
  itemChecked: boolean;
  clickEvent: any;
  formData = [];
  editable: boolean = false;
  showSecert: boolean = false;
  increment: number = 0;
  log =[];

  ngOnInit(): void {
    this.list = ['Sudipta', 'Nilotpal', 'Debalina'];
    this.myInput.nativeElement.focus();
  }
 
 // @ViewChild('myInput') myInput: ElementRef;

 @ViewChild('myInput',{static: true}) myInput: ElementRef;

  add(item: any): void {
    console.log("You entered: " + item);
    if(this.list.indexOf(this.item) == -1 && this.item !== "")
    {
      console.log("the item is " + item);
    this.list.push(this.item);
    console.log("List is: " + this.list);
    this.item = "";
    }
    this.myInput.nativeElement.focus();
  }

  /*setChecked(todo: any) {
    console.log('todo selected is ' + todo);
  }*/


  onClick(clickEvent, todo: any) {
    console.log(todo + " is checked");
    console.log(clickEvent);

    if (clickEvent.currentTarget.checked) {

      console.log("itemchecked is: " + clickEvent.currentTarget.checked);

      console.log("items to be deleted is " + todo);
      this.delList.push(todo);
      console.log("items to be deleted in the delete list " + this.delList);
    }
    else {
      this.delList.splice(this.delList.indexOf(todo), 1);
      console.log("itemchecked is: " + clickEvent.currentTarget.checked);
      console.log("items to be deleted is " + this.delList);
    }

  }

  deleteTodo() {

    if (this.delList != null) {

      for (var i = 0; i < this.list.length; i++) {
        console.log("List with all data" + this.list[i])
        for (var j = 0; j < this.delList.length; j++) {
          console.log("List with checked data"+ this.delList[j])
          if (this.list[i] == this.delList[j]) {

            this.list.splice(this.list.indexOf(this.list[i]), 1);
          }

        }

      }
      console.log("Final TO-DO List: " + this.list)
      this.delList = [];
      console.log("dellist is: " + this.delList);
    }

  }
  
  editTodo(todo){
    console.log(" the edit list is " + todo);
    this.editable = !this.editable;
    if(this.editable == true){
      console.log("inside the if condition");
      todo= this.list;
    }
   
    console.log("the new value of item is " + this.item2);
     if(this.item2 !=null){
       for(var i = 0; i < this.list.length; i++){
         if(this.list[i] == todo){
          this.list.splice(this.list.indexOf(this.list[i]), 1,this.item2);
          console.log(" the new list is " + this.list)
         }
       }
     }
    console.log(todo);
    
  }

  togglepara(){
    this.showSecert = !this.showSecert;
    this.log.push(this.log.length + 1)
    console.log(this.log);
  }

}