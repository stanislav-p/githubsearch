import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  private repository: any;
  private sortBy = 'name';
  private page: Number;

  constructor(private http: Http) {
    console.log('Github');
  }

  getRepositories() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repository + '+in:name+sort:' + this.sortBy + '&page=' + this.page + '&per_page=10')
      .map(res => res.json());
  }

  updateRepository(repository) {
    this.repository = repository;
  }

  sortItems(sortBy:string) {
    this.sortBy = sortBy;
  }

  pag(page) {
    this.page = page;
  }
}
