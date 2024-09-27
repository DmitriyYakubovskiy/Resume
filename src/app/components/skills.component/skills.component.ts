import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ResumeService } from '../../services/resume.service';
import { Skills } from '../../models/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skills : Skills

  constructor(private resumeService:ResumeService) {}

  ngOnInit(): void{
    this.skills=this.resumeService.getResume().skills;
  }
}
