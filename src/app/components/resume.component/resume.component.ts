import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Resume } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';
import { SkillsComponent } from '../skills.component/skills.component';
import { ExperienceComponent } from '../experience.component/experience.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ResumeComponent, ExperienceComponent, SkillsComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  resume: Resume;

  constructor(private resumeService:ResumeService) {}

  ngOnInit(): void{
    this.resume=this.resumeService.getResume();
  }
}
