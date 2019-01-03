import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-clients',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {
            var slideIndex = 1;
            showSlides(slideIndex);
            startChange()

            $(".dot").click(function () {
                var id: number = this.id.split(":")[1]
                slideIndex = id
                showSlides(slideIndex)
            })

            $(".next").click(function () {
                if (slideIndex < 3) {
                    slideIndex += 1
                } else {
                    slideIndex = 1
                }
                showSlides(slideIndex)
            })

            $(".prev").click(function () {
                if (slideIndex == 1) {
                    slideIndex = 3
                } else {
                    slideIndex -= 1
                }
                showSlides(slideIndex)
            })

            function startChange() {
                setInterval(function () {
                    if (slideIndex < 3) {
                        slideIndex += 1
                    } else {
                        slideIndex = 1
                    }
                    showSlides(slideIndex)
                }, 3000);
            };


            function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");
                if (n > slides.length) {
                    slideIndex = 1
                }

                if (n < 1) {
                    slideIndex = slides.length
                }

                for (i = 1; i <= slides.length; i++) {
                    // slides[i].style.display = "none";
                    (<HTMLElement>document.querySelector('#mySlides' + i)).style.display = 'none';
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                (<HTMLElement>document.querySelector('#mySlides' + slideIndex)).style.display = 'block';
                // slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";
            }
        })


    }

}
