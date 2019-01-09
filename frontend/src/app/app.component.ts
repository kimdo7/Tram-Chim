import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
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
        $(document).ready(function () {
            var lastScrollTop = 0;
            $(window).scroll(function (event) {
                var st = $(this).scrollTop();
                if (st > lastScrollTop) {
                    // downscroll code
                    $( ".navbar" ).removeClass( "navbar-transparent bg-transparent" );
                    $( ".navbar" ).addClass( "bg-dark navbar-transparent" );
                } else if (st == 0) {
                    $( ".navbar" ).addClass( "navbar-transparent bg-transparent" );
                    $( ".navbar" ).removeClass( "bg-dark navbar-transparent" );
                }
                lastScrollTop = st;
            });
        });
    }

    onNavigate(text, flag) {
        this.title = text
        this._router.navigate([text])
        console.log(window.innerWidth)

        if (flag && window.innerWidth <= 900) {
            $('#hamburger').trigger('click');
        }

        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
}
