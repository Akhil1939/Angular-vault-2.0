import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable, debounceTime, from, of, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  SearchForm: FormGroup = new FormGroup({});
  search:FormControl = new FormControl('');

  category: string[] = ['Mobiles', 'Laptops', 'Tablets', 'Watches', 'Shoes', 'Clothes', 'Books', 'Furniture', 'Bags', 'Accessories'];
  category$:Observable<string> = from(this.category)

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.SearchForm = new FormGroup({
      search: new FormControl('search')
    });
    this.SearchForm.get('search')?.valueChanges.pipe(
      // take(2),
      // takeWhile(data=>data.length>6),
      // takeWhile((v)=> this.checkCondition(v)),
      debounceTime(1000)
    ).subscribe(data=>{
      console.log(data);
      this.category$.pipe(
        takeLast(3)
      ).subscribe(data=>{
        console.log(data);
      }
      );
    }
    );
  }
  checkCondition(value: string | any[]){
    return value.length>6 ? true : false;
  }

  readValue(){
    console.log("Read Value");
  }

  
}
