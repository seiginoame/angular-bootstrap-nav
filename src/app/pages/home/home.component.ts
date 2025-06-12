import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container mt-5">
      <h1 class="mb-4">Home Page</h1>
      <p class="lead">Welcome to our site.</p>

      <!-- Alert -->
      <div class="alert alert-info mt-4" role="alert">
        This is a Bootstrap alert — it's used to highlight important information.
      </div>

      <!-- Buttons -->
      <div class="my-4">
        <button class="btn btn-primary me-2">Primary</button>
        <button class="btn btn-outline-secondary">Outline</button>
      </div>

      <!-- Card -->
      <div class="card mb-4" style="max-width: 600px;">
        <div class="card-body">
          <h5 class="card-title">Bootstrap Card</h5>
          <p class="card-text">Cards are flexible containers with options for headers, footers, content, and more.</p>
          <a href="#" class="btn btn-success">Go somewhere</a>
        </div>
      </div>

      <!-- Grid layout -->
      <div class="row text-center">
        <div class="col-md-4">
          <div class="p-3 border bg-light">Column 1</div>
        </div>
        <div class="col-md-4">
          <div class="p-3 border bg-light">Column 2</div>
        </div>
        <div class="col-md-4">
          <div class="p-3 border bg-light">Column 3</div>
        </div>
      </div>

      <!-- Modal Trigger Button -->
      <button type="button" class="btn btn-warning mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch Demo Modal
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              This is a Bootstrap modal triggered by the yellow button above.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}
