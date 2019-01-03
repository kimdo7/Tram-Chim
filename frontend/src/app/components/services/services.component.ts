import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
    selector: 'app-solutions',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {

            $(".iconBy2").height($(".iconBy2").width())
            $(".iconBy4").height($(".iconBy4").width())
        })
    }

}
