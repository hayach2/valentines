import { RenderMode, ServerRoute } from '@angular/ssr'

export const serverRoutes: ServerRoute[] = [
  {
    path: 'valentine-question/:fullName',
    renderMode: RenderMode.Client, // or RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
]