import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  repositories: any;
  repository: any;
  sortBy: any;

  constructor(private searchService: SearchService) {
    this.searchService.getRepositories().subscribe(repositories => {
      this.repositories = repositories.items;
      console.log(this.repositories);
    });
  }

  search() {
    this.searchService.updateRepository(this.repository);

    this.searchService.getRepositories().subscribe(repositories => {
      this.repositories = repositories.items;
      console.log(this.repositories);
    });
  }

  sort(value) {
    this.searchService.sortItems(value);

    this.searchService.getRepositories().subscribe(repositories => {
      this.repositories = repositories.items;
      console.log(this.repositories);
    });
  }

  pagination(page) {
    this.searchService.pag(page);

    this.searchService.getRepositories().subscribe(repositories => {
      this.repositories = repositories.items;
      console.log(this.repositories);
    });
  }

  ngOnInit() {
  }

}
