import { Injectable } from '@angular/core';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills:Skills ={
    softSkills: ['Работа в команде', 'Коммуникабельность', 'Ответственность'],
    hardSkills: ['JavaScript', 'Angular', 'TypeScript', 'HTML', 'CSS', 'C++'],
  };

  getSkills(): Skills {
    return this.skills;
  }

  addHardSkill(name: string): void{
      this.skills.hardSkills.push(name);
  }

  addSoftSkill(name:string): void{
    this.skills.softSkills.push(name);
  }
}
