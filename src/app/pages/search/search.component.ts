import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  type;
  searchResults = [];
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) { }

  ngOnInit() {
      this.route.paramMap.subscribe( params => {

        const q = params.get('q');
        this.type = params.get('type');
        return this.searchService.getSearchResults(q, this.type).subscribe((res: any[]) => {
          this.searchResults = res;
          }
        );
      });
  }

}
