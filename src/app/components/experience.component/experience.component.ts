import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Experience } from '../../models/experience';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experience:Experience

  constructor(private experienceService:ExperienceService) {}

  ngOnInit(): void{
    this.experience=this.experienceService.getExperience();
  }

  addWork(): void{
    const duration = prompt("Введите длительность работы:");
    const name = prompt("Введите имя работы: ");
    if (duration && name) {
      this.experienceService.addWork(Number(duration), name);
      this.experience=this.experienceService.getExperience();
    }
  }
}
