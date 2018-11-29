import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

export class Article {

  constructor(public title: string) {
  }

}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public articles: any;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {


    // this.reqGetData();
    // this.rxjs();
    // const as = this.rxjs2();
    // console.log(as);

    // this.articles = as;

    this.httpClient
      .get<Todo[]>(
        'https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10'
      )
      .pipe(tap(console.log));
  }

  reqGetData() {

    const _that = this;
    const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
    this.httpClient.get(url).subscribe(data => {
      console.log(data['result']);

      _that.articles = data['result'];

    }, error => {
      console.log(error);
    });
  }

  rxjs() {
    const _that = this;
    const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
    this.httpClient.get(url).pipe(map(data =>
      data['result']
    )).subscribe(res => console.log(res));
  }


  // https://codecraft.tv/courses/angular/http/http-with-promises/
  // https://www.techiediaries.com/angular-rxjs-tutorial/
  // http://semlinker.com/ng-http-client/
  rxjs2(): Observable<Article[]> {
    const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
    console.log('llllll');

    return this.httpClient.get<Article[]>(url)
      .pipe(tap(console.log));
    // return this.httpClient.get<Article[]>(url)
    //   .pipe(map((res: any) => {
    //     return res.result.map(item => {
    //       return new Article(item.title);
    //     });
    //   }));
  }

}
