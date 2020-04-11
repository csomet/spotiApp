import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {


  artists : any[];
  isLoading: boolean;
  errorMessage: string;

  constructor(private spotiService: SpotifyService) {
    this.errorMessage = "";
   }

  ngOnInit(): void {
  }

  search(query: string){

    this.isLoading = true;
    this.errorMessage = "";

    this.spotiService.getArtists(query).subscribe( (data : any) => {
       this.artists = data;
       this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
      this.errorMessage = err.error.error.message;
    });
  }

}
