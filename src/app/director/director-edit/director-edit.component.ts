import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { Director } from 'src/app/interfaces/director';
import { DirectorService } from 'src/app/services/director.service';

@Component({
  selector: 'app-director-edit',
  templateUrl: './director-edit.component.html',
  styleUrls: ['./director-edit.component.scss']
})
export class DirectorEditComponent implements OnInit {

  director!: Director;
  directorForm!: FormGroup;
  isUpdated!: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly directorService : DirectorService
  ) { 
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>{
        return this.directorService.getDirector(params.get('id')!)
      })
    ).subscribe((director: Director) => {
      this.director = director;
      this.directorForm = new FormGroup({
        name: new FormControl(director.name, [
          Validators.required,
          Validators.minLength(2)
        ])
      });
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const director: Director = {
      id: this.director.id,
      ...this.directorForm.value
    }
    this.directorService.updateDirector(director).subscribe(res =>{
      this.isUpdated = true;
    });
  }
}
