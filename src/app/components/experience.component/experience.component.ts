import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Resume } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experience:Experience

  constructor(private resumeService:ResumeService) {}

  ngOnInit(): void{
    this.experience=this.resumeService.getResume().experience;
  }
}
