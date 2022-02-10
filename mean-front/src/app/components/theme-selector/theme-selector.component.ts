import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {
  themeLink:any = document.querySelector('#theme');;

  constructor() {

   }

  ngOnInit(): void {
  }

  changeTheme(theme:string){
    console.log(theme)
    let url = `./assets/themes/${theme}.css`;
    this.themeLink.setAttribute('href',url)
    console.log(this.themeLink)
  }

}
