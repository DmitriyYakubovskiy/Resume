import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experience:Experience ={
    works:[
      {duration:2 , name:"IT"},
    ]
  };

  getExperience(): Experience {
    return this.experience;
  }

  addWork(duration:number, name:string): void{
    this.experience.works.push({duration,name});
  }
}
