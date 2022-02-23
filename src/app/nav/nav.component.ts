import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() {
   


  }

  ngOnInit(): void {
    
    $(".nav-link").css({
      color:"#fff"
     })
    let nav = document.getElementById("myNav");
    // (document.getElementById("myNav")as HTMLElement).style.backgroundColor="red"
    $(document).scroll(function () {

      console.log($(document).scrollTop());


      if ($(document).scrollTop() >= 80) {

        $(nav).css({

          backgroundColor: "#ffffff",
          boxShadow: "1px 0px 2px rgba(0, 0, 0, 0.15) inset",
          padding: "16px 0 ",
          zIndex:"999999999999999999999999",
        })
        // color:"rgba(0,0,0,0.5)"
        $(nav).addClass("animate__animated animate__slideInDown")
        $(".nav-link").css({
          color:"rgba(0,0,0,0.5)"
         })
 


      }
      else {
        $(nav).css({
          backgroundColor: "rgba(0, 0, 0, 0)",
          boxShadow: "none",
          padding: "16px 0"
        });
        $(nav).removeClass("animate__animated animate__slideInDown")
        $(".nav-link").css({
         color:"#fff"
        })


      }
    })














    // open home 
    $("#home-btn").click(function () {
      // close all taps before open this (exept home)
      $("#about-modal").hide(400, () => { });
      $("#industries-modal").hide(400, () => { });
      $("#services-modal").hide(400, () => { });



      // toggle
      $("#home-modal").toggle(400);
    })

    //open about
    $("#about-btn").click(function () {
      // close all taps before open this (exept home)
      $("#home-modal").hide(400, () => { });
      $("#industries-modal").hide(400, () => { });
      $("#services-modal").hide(400, () => { });


      // toggle
      $("#about-modal").toggle(400)
    })

    //open industries
    $("#industries-btn").click(function () {
      // close all taps before open this (exept industries)
      $("#home-modal").hide(400, () => { });
      $("#about-modal").hide(400, () => { });
      $("#services-modal").hide(400, () => { });



      $("#industries-modal").toggle()
      // toggle
      let industry = (document.getElementById("industries-modal")).style.display

      console.log(industry);

      if (industry == "block") {
        (document.getElementById("industries-modal")).style.display = "flex"

      }


    })

    $("#service-btn").click(function () {
      // close all taps before open this (exept industries)
      $("#home-modal").hide(400, () => { });
      $("#about-modal").hide(400, () => { });
      $("#industries-modal").hide(400, () => { });



      $("#services-modal").toggle()
      // toggle
      let industry = (document.getElementById("services-modal")).style.display

      console.log(industry);

      if (industry == "block") {
        (document.getElementById("services-modal")).style.display = "flex"

      }


    })
  }

}
