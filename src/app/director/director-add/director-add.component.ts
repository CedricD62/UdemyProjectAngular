import { Component, OnInit } from '@angular/core';
import { Director } from 'src/app/interfaces/director';
import { Movie } from 'src/app/interfaces/movie';
import { DirectorService } from 'src/app/services/director.service';

@Component({
  selector: 'app-director-add',
  templateUrl: './director-add.component.html',
  styleUrls: ['./director-add.component.scss']
})
export class DirectorAddComponent implements OnInit {

  name!: string;
  movies!:string[];
  isCreated = false;

  constructor(
    private readonly directorService: DirectorService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{

    const director: Director = {
      name : this.name,
      movies: this.movies
    };
    
    this.directorService.createDirector(director).subscribe(() =>{
      this.isCreated = true;
      this.name = "";
    });
  }

}
