import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist: any;
  topTracks: any[];
  isLoading: boolean;
  
  constructor(private spotifyService: SpotifyService,
              private activeRoute: ActivatedRoute) {


        this.activeRoute.params.subscribe( params => {
          this.spotifyService.showArtist(params['id']).subscribe(data => {
              this.artist = data;
          })
    
        
    
          this.spotifyService.getTopTracks(params['id']).subscribe( (data: any[]) => {
            this.topTracks = data;
          })
        })
              

   }

  ngOnInit(): void {

    
    
  }

}
