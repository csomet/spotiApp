import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  featuredSongs: any[];
  isLoading: boolean;
  errorMessage: string;

  constructor(private spotifyService: SpotifyService) {

    //loading
    this.isLoading = true;
    this.errorMessage="";

    this.spotifyService.getNewReleases().subscribe( (data : any) => {
      this.featuredSongs = data;
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
      this.errorMessage = err.error.error.message;
    });
   
  }


  ngOnInit(): void {}

}
