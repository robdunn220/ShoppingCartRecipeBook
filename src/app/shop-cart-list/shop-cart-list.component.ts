import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-cart-list',
  templateUrl: './shop-cart-list.component.html',
  styleUrls: ['./shop-cart-list.component.css']
})
export class ShopCartListComponent {
  data = [];
  tableName = '';
  createdTable = false;
  itemName = '';
  itemQuantity = null;
  invalidInput = 'Quantity must be a number.';

  createTable() {
    this.tableName = this.tableName;
    this.createdTable = true;
  }

  addToList() {
    if (this.itemName && Number.isInteger(this.itemQuantity) && this.itemQuantity > 0) {
      const table = document.getElementById('shopListTable') as HTMLTableElement;
      const row = table.insertRow(table.rows.length);
      const cellItem = row.insertCell(0);
      const cellQuantity = row.insertCell(1);
      const itemNameT = document.createTextNode(this.itemName);
      const itemQuantityT = document.createTextNode(String(this.itemQuantity));
      cellItem.appendChild(itemNameT);
      cellQuantity.appendChild(itemQuantityT);

      this.itemName = null;
      this.itemQuantity = null;
    } else {
      return false;
    }
  }
}
