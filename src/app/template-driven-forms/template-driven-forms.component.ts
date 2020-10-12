import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myName = "";
  myEmail = "";
  myState = "";
  myCity = "";
  myPostal = "";

  float = "";
  width = "100%";
  divVisible = false;
  size = window.matchMedia("(max-width: 768px)");
  onSubmit(value: any)
  {
    console.log(value);
  }

  test()
  {
    if(this.size.matches)
    {
    this.float="none";
    this.width="100%";
    this.divVisible = true;
    }
    else{
    this.float="left";
    this.width="50%";
    this.divVisible = true;
    }
  }

  onClose()
  {
    this.float="none";
    this.width="100%";
    this.divVisible = false;
  }

}
