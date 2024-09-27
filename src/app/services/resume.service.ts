import { Injectable } from '@angular/core';
import { Resume } from '../models/resume.model';
import { ExperienceService } from './experience.service';
import { SkillsService } from './skills.service';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private resume: Resume = {
    name: 'Иван Иванов',
    speciality: 'Программист',
    photo: '/images/programmist.jpg',
    phone: '+7 (123) 333-33-33',
    city: 'Москва',
    description: 'Очень крутой',
    experience: null,
    skills: null,
    links: [
      {name: "GitHub", url: "https://github.com/DmitriyYakubovskiy"}
    ]
  };

  constructor(private experienceService:ExperienceService, private skillsService:SkillsService){
    this.resume.experience=experienceService.getExperience()
    this.resume.skills=skillsService.getSkills()
  }

  getResume(): Resume {
    return this.resume;
  }
}
