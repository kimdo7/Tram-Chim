import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = '/home';

    constructor(private _router: Router) { }

    ngOnInit() {
    }

    onNavigate(text, flag) {
        this.title = text
        this._router.navigate([text])
        console.log(window.innerWidth)

        if (flag && window.innerWidth <= 900) {
            $('#hamburger').trigger('click');
        }
    }
}
