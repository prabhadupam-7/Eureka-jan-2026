import { Component } from '@angular/core';
import { MyModel } from '../my-model/my-model';

@Component({
  selector: 'app-footer',
  imports: [MyModel],
  template: `
    <div class="container-fluid bg-dark text-white">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2"><app-my-model></app-my-model></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2">About</a></li>
    </ul>
    <p class="text-center">© 2025 Company, Inc</p>
  </footer>
</div>
  `,
  styles: ``,
})
export class Footer {

}
