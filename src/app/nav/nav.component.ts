import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  modalHeader: any = "our header"
  modalContent: any = "our content"

  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayMaximizable: boolean;

  displayPosition: boolean;

  position: string;

  openSupplyChain() {
    this.modalHeader = "Supply Chain Automation ",
      this.modalContent = "Disrupted supply chains, changes in ordering volumes, transportation issues have made it so much harder for companies to operate. But imagine you could have an automated inventory system. The system that will allow you to easily manage your stock, predict the demand, plan for force majeure situations, and even more. The one that will allow your business to operate smoothly. Supply chain automation is leveraging digital technologies such as internet of things (IoT), artificial intelligence (AI), machine learning (ML), Robotic Process Automation (RPA), Optical Character Recognition (OCR), and robotics to lower the operational cost of delivering a product or service. Supply chain managers are constantly looking for ways to improve the efficiency and accuracy of their supply chains."
    this.showModalDialog()
  }
  openSmartEconomic() {
    this.modalHeader = "Smart and Economic Manufacturing Technology"
    this.modalContent = "GreenMEA owns several technologies and methodologies that connects every piece in the physical world with the digital world so that smart factories can monitor the entire production process, from manufacturing tools and the supply chain to individual operators on the shop floor. Green MEA has a strategic alliance with the leading IIOT technology provider E|SQUARE on developing patented technologies in the IOT, AI and fog computing domain"
    this.showModalDialog()
  }

  openIntelligent() {
    this.modalHeader = "Intelligent Energy Management Technology"
    this.modalContent = "Power systems monitoring and control requires extremely large amount of information – millions of points or more – extracted from multiple sources with enough resolution of time and quality either automatically or manually."
    this.showModalDialog()
  }

  openFintech() {
    this.modalHeader = "Fintech and E-payment Intelligence Technology"
    this.modalContent = "As the financial services industry experiences considerable upheaval based on digitalization and new regulations, incumbents and startups apply digital technologies to increase their competitiveness. Our findings indicate that by utilizing intelligent automation—the combination of robotic process automation and artificial intelligence—FinTech firms could improve all the components of their business model, value creation, value delivery, and value capture"
    this.showModalDialog()
  }


  openOperations() {
    this.modalHeader = "Excellence of operations"
    this.modalContent = "Innovation is the only way to overcome the challenges of tomorrow! To make the transformation into the digital age, operational excellence needs to explore the use of new technologies"
    this.showModalDialog()
  }

 








  showModalDialog() {
    this.displayModal = true;
  }


  constructor() {



  }

  ngOnInit(): void {

    $(".nav-link").css({
      color: "#fff"
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
          zIndex: "999999999999999999999999",
        })
        // color:"rgba(0,0,0,0.5)"
        $(nav).addClass("animate__animated animate__slideInDown")
        $(".nav-link").css({
          color: "rgba(0,0,0,0.5)"
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
          color: "#fff"
        })


      }
    });

    //  let myLinks = (document.getElementsByClassName('nav-item')as HTMLCollection);
    //  console.log(myLinks);
    //  for(let i = 0 ;i<myLinks.length ;i++){
    //    i.add
    //  }
    // open home 
    $("#home-btn").click(function () {
      // close all taps before open this (exept home)
      $("#about-modal").hide(400, () => { });
      $("#industries-modal").hide(400, () => { });
      $("#solutions-modal").hide(400, () => { });



      // toggle
      $("#home-modal").toggle(400);
    })

    //open about
    $("#about-btn").click(function () {
      // close all taps before open this (exept home)
      $("#home-modal").hide(400, () => { });
      $("#industries-modal").hide(400, () => { });
      $("#solutions-modal").hide(400, () => { });


      // toggle
      $("#about-modal").toggle(400)
    })

    //open industries
    $("#industries-btn").click(function () {
      // close all taps before open this (exept industries)
      $("#home-modal").hide(400, () => { });
      $("#about-modal").hide(400, () => { });
      $("#solutions-modal").hide(400, () => { });



      $("#industries-modal").toggle()
      // toggle
      let industry = (document.getElementById("industries-modal")).style.display

      console.log(industry);

      if (industry == "block") {
        (document.getElementById("industries-modal")).style.display = "flex";

      }


    })

    $("#service-btn").click(function () {
      // close all taps before open this (exept industries)
      $("#home-modal").hide(400, () => { });
      $("#about-modal").hide(400, () => { });
      $("#industries-modal").hide(400, () => { });



      $("#solutions-modal").toggle()
      // toggle
      let industry = (document.getElementById("solutions-modal")).style.display

      console.log(industry);

      if (industry == "block") {
        (document.getElementById("solutions-modal")).style.display = "flex"

      }


    })
  }

}
