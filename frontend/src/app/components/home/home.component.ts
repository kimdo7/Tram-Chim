import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private _router: Router) { }

    ngOnInit() {
        $(document).ready(function(){
            
            $(".icon").height($(".icon").width())
        })
    }

    onToSolution(){
        this._router.navigate(["/solutions"])
    }
}
