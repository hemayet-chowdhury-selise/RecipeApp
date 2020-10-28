import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import {IngredientModel } from '../../shared/IngredientModel';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameIng') nameIngRef: ElementRef;
  @ViewChild('amountIng') amountIngRef: ElementRef;



  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit(): void {
  }

  onAddIng(){
    const nameIng = this.nameIngRef.nativeElement.value;
    const amountIng = this.amountIngRef.nativeElement.value;
    this.shoppingListService.onIngAdded(new IngredientModel(nameIng, amountIng));
    
  }

}
