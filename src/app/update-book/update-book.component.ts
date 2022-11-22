import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book/book';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book:Book=new Book("","","","",0);
  id:number=0;
  sub:any="";
  constructor(private route:ActivatedRoute, private bService:BookServiceService,private router:Router) { }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params => {
      this.id = params['id'];
      });
      
      let resp=this.bService.getBook(this.id);
      resp.subscribe(((data)=>this.book=<Book>data));
  }

  public updateBook(){
    
    let resp=this.bService.updateBook(this.book);
    resp.subscribe((data)=>{});
    this.router.navigateByUrl("/viewbook");
  }

}