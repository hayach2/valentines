import {
  AfterViewInit,
  ElementRef,
  ViewChild,
  Component,
  Inject,
  PLATFORM_ID,
  signal
} from '@angular/core'

import { isPlatformBrowser } from '@angular/common'
import { RouterLink, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-valentine-question',
  imports: [RouterLink],
  templateUrl: './valentine-question.html',
  styleUrl: './valentine-question.css',
})
export class ValentineQuestion {
  name = '';
  @ViewChild('runawayBtn') btn!: ElementRef<HTMLAnchorElement>

  constructor(@Inject(PLATFORM_ID) private platformId: Object,  private route: ActivatedRoute) {
    if (isPlatformBrowser(this.platformId)) {
      this.name = this.route.snapshot.paramMap.get('fullName') ?? ''
    }
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return

    const button = this.btn.nativeElement

    button.addEventListener('mouseenter', () => {
      const padding = 20

      const maxX = window.innerWidth - button.offsetWidth - padding
      const maxY = window.innerHeight - button.offsetHeight - padding

      const x = Math.random() * maxX + padding
      const y = Math.random() * maxY + padding

      button.style.position = 'fixed'
      button.style.left = `${x}px`
      button.style.top = `${y}px`
    })
  }
}
