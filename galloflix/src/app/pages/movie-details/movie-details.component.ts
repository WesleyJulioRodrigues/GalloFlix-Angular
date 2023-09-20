import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  constructor(private service: MovieApiService, private router: ActivatedRoute) { }
  
  movieResult: any;
  movieVideoResult: any; 
  movieCastResult: any;

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id'); this.getMovie(id);
    this.getMovie(id);
    this.getVideo(id); 
    this.getCast(id);
    
    
  }
  getVideo(id: string | null) {
    throw new Error('Method not implemented.');
  }
  getCast(id: string | null) {
    throw new Error('Method not implemented.');
  }

  getMovie(id: any) {
    this.service.movieDetails(id).subscribe((result) => {
      //console.log(result, 'movieDetails#'); 
      this.movieResult = result;
    });
    
  }
}

