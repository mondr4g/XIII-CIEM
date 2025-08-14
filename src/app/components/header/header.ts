import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
