import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
    selector: 'app-solutions',
    templateUrl: './solutions.component.html',
    styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {

            $(".iconBy2").height($(".iconBy2").width())
            $(".iconBy4").height($(".iconBy4").width())
        })
    }

}
