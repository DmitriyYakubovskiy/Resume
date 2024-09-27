import { Experience } from './experience';
import { Skills } from './skills';

export class Resume {
  name: string;
  speciality: string;
  photo: string;
  phone: string;
  city: string;
  description: string;
  experience: Experience;
  skills: Skills;
  links: {name: string, url: string}[] = [];
}
