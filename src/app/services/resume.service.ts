import { Injectable } from '@angular/core';
import { Resume } from '../models/resume.model';
import { Experience } from '../models/experience';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private experience:Experience ={
    works:[
      {duration:2 , name:"IT"},
    ]
  };
  private skills: Skills = {
    softSkills: ['Работа в команде', 'Коммуникабельность', 'Ответственность'],
    hardSkills: ['JavaScript', 'Angular', 'TypeScript', 'HTML', 'CSS'],
  };
  private resume: Resume = {
    name: 'Иван Иванов',
    speciality: 'Программист',
    photo: '/images/programmist.jpg',
    phone: '+7 (123) 333-33-33',
    city: 'Москва',
    description: 'Очень крутой',
    experience: this.experience,
    skills: this.skills,
    links: [
      {name: "GitHub", url: "https://github.com/DmitriyYakubovskiy"}
    ]
  };

  getResume(): Resume {
    return this.resume;
  }
}
