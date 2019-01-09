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
    isHamburgerClicked : Boolean = false;

    constructor(private _router: Router) { }

    ngOnInit() {
        $(document).ready(function () {
            var lastScrollTop = 0;
            $(window).scroll(function (event) {
                var st = $(this).scrollTop();
                if (st > lastScrollTop) {
                    // downscroll code
                    $( ".navbar" ).removeClass( "bg-transparent" );
                    $( ".navbar" ).addClass( "bg-dark " );
                } else if (st == 0) {
                    $( ".navbar" ).addClass( "bg-transparent" );
                    $( ".navbar" ).removeClass( "bg-dark " );
                }
                lastScrollTop = st;
            });

            $("#hamburger").click(function(){
                if ( window.innerWidth <= 900) {
                    if (this.isHamburgerClicked){
                        this.isHamburgerClicked = false
                        if (lastScrollTop == 0){
                            $( ".navbar" ).addClass( "bg-transparent" );
                            $( ".navbar" ).removeClass( "bg-dark " );
                        }
                    }else{
                        this.isHamburgerClicked = true
                        $( ".navbar" ).addClass( "bg-dark");
                        $( ".navbar" ).removeClass( "bg-transparent" );
                    }
                }
            })
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
