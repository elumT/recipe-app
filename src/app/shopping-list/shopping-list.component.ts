import { Component, OnInit } from '@angular/core';
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";

@Component({
    selector: 'app-shopping-list',
    standalone: true,
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css',
    imports: [ShoppingListEditComponent]
})
export class ShoppingListComponent implements OnInit{
    ingredients = [];
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
