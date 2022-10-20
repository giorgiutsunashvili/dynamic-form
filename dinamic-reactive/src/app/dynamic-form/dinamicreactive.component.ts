import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dinamicreactive',
  templateUrl: './dinamicreactive.component.html',
  styleUrls: ['./dinamicreactive.component.css']
})
export class DinamicreactiveComponent implements OnInit {
   workexp!:FormGroup
  constructor(private fbuilder:FormBuilder) { 
    this.workexp = this.fbuilder.group({
      "jobs":this.fbuilder.array([])
    })
  }
   getjobsgroup():FormArray{
       return this.workexp.get("jobs") as FormArray
   };
   createjob():FormGroup{
    return this.fbuilder.group({
      companyname:'',
      description:'',
      positions:this.fbuilder.array([])
    });
   };
   getposition(jobindex:number):FormArray{
        return this.getjobsgroup().at(jobindex).get("positions") as FormArray
   }
   createposition():FormGroup{
    return this.fbuilder.group({
      start:'',
      end:'',
      positionlevel:'',
      description:''
    })
   }
  ngOnInit(): void {
  }
  addjob():void{
    this.getjobsgroup().push(this.createjob())
  }
  deletejob(jobindex:number):void{
    this.getjobsgroup().removeAt(jobindex)
  }
  addposition(jobindex:number):void{
    this.getposition(jobindex).push(this.createposition())
  }
  deleteposition(jobindex:number, positioindex:number):void{
    this.getposition(jobindex).removeAt(positioindex)
  }
  onFormSubmit(){
    console.log(FormGroup)
  }
}

