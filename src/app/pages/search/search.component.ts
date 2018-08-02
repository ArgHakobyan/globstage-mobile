import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { SearchService } from '../../services/search.service'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) { }

  ngOnInit() {
      this.route.paramMap.subscribe( params => {

        const q = params.get('q');
        const type = params.get('type');
        return this.searchService.getSearchResults(q, type).subscribe(res => {

          }
        )
      });
  }

}
