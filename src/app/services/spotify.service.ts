import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
  //automatically import service in the providers in app.module
})
/**
 * Service Class for spotify
 */
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQueryService(request: string){
    const url = `https://api.spotify.com/v1/${request}`;
    const headers = new HttpHeaders(
      {
        'Authorization': 'Bearer BQBs6UXEeAodeslUtaSZMN2ZB8hGie07aHcioKh9dos1BxtmV4Qh2Suay7QI0c4htVcbblbeFP0xF0SLBoU'
      }
    )
    return this.http.get(url, {headers});
  }

  /**
   * Get all new releases on Spotify
   */
  getNewReleases(){

    //Use Pipe becuase it is a subscription...
    return this.getQueryService('browse/new-releases?limit=20')
                .pipe( map( data => data['albums'].items ));
      
  }

  /**
   * Get artist by search qry
   * @param query 
   */
  getArtists(query: string){
   
    return this.getQueryService(`search?query=${query}&type=artist&offset=0&limit=20`)
              .pipe( map( (data: any) => data.artists.items ));

  }

  /**
   * Show information about one artist by id
   * @param id 
   */
  showArtist(id: string){
    return this.getQueryService(`artists/${id}`);
  }


  /**
   * Get top tracks from given artist id
   * @param id 
   */
  getTopTracks(id: string){
    return this.getQueryService(`artists/${id}/top-tracks?country=us`)
          .pipe(map( (data: any) => data.tracks));
  }
}
