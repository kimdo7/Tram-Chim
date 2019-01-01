import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {

            $(".icon").height($(".icon").width())
        })
    }

}
