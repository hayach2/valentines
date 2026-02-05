import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-full-name',
   imports: [FormsModule],
  templateUrl: './full-name.html',
  styleUrl: './full-name.css',
   standalone: true,
})
export class FullName {
  fullName = ''

  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/valentine-question', this.fullName])
  }
}
