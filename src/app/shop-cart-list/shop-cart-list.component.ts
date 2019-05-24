import { Component } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-shop-cart-list',
  templateUrl: './shop-cart-list.component.html',
  styleUrls: ['./shop-cart-list.component.css']
})
export class ShopCartListComponent {
  data = [];
  itemName = '';
  itemQuantity = '';

  addToList() {
    const table = document.getElementById('shopListTable') as HTMLTableElement;
    const row = table.insertRow(table.rows.length);
    const cellItem = row.insertCell(0);
    const cellQuantity = row.insertCell(1);
    const itemNameT = document.createTextNode(this.itemName);
    const itemQuantityT = document.createTextNode(this.itemQuantity);
    cellItem.appendChild(itemNameT);
    cellQuantity.appendChild(itemQuantityT);
  }
}
