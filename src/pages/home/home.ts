import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { GithubProvider } from "../../providers/github.provider";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  repoList: any[];

  repoName: string = "";

  constructor(public navCtrl: NavController,private browser: InAppBrowser, private github: GithubProvider) {}

  search(ev: any) {
    let val = ev.target.value;

    if (!val || val.trim() == "") return;

    this.github.getList(val).subscribe(items => {
      this.repoList = items.filter(item => item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
  }  

  clear() {  
    this.repoList = [];
  }

  openUrl(url:string){
    this.browser.create(url,"","fullscreen=no");
  }

  ionViewDidLoad() {}
}
