import { Component } from '@angular/core';

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

    this.itemName = null;
    this.itemQuantity = null;
  }
}
