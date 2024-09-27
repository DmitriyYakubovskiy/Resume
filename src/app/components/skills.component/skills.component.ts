import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Skills } from '../../models/skills';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skills : Skills

  constructor(private skillsService:SkillsService) {}

  ngOnInit(): void{
    this.skills=this.skillsService.getSkills();
  }

  addHardSkill(): void {
    const skill = prompt("Введите новый Hard Skill:");
    if (skill) {
      this.skillsService.addHardSkill(skill);
      this.skills = this.skillsService.getSkills();
    }
  }

  addSoftSkill(): void {
    const skill = prompt("Введите новый Soft Skill:");
    if (skill) {
      this.skillsService.addSoftSkill(skill);
      this.skills = this.skillsService.getSkills();
    }
  }
}
