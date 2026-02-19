import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-status',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-status.html',
})
export class TaskStatus{

  // Task Array
  tasks = [
    { id: 1, title: 'Complete Angular assignment', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Prepare project report', completed: false },
    { id: 4, title: 'Attend team meeting', completed: true },
    { id: 5, title: 'Update documentation', completed: false },
  ];

  selectedFilter: string = 'all';

  // Toggle checkbox
  toggleTask(task: any) {
    task.completed = !task.completed;
  }

  // Filtered tasks
  get filteredTasks() {
    if (this.selectedFilter === 'completed') {
      return this.tasks.filter(task => task.completed);
    }
    if (this.selectedFilter === 'pending') {
      return this.tasks.filter(task => !task.completed);
    }
    return this.tasks;
  }
}
