import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-cart-list',
  templateUrl: './shop-cart-list.component.html',
  styleUrls: ['./shop-cart-list.component.css']
})
export class ShopCartListComponent {
  data = [];
  itemName = '';
  itemQuantity = 0;
  invalidInput = 'Quantity must be a number.';

  addToList() {
    if (Number.isInteger(this.itemQuantity)) {
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
