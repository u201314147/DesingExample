     /*global BindClass */
/*jslint browser: true, indent: 4*/

/**
 * @file Manages the configuration of the HTML application. 
 * Loading the JSON data in application to binding the data into the page.
 * @author LG CSP-1
 */

/**
 * Description of module, defines module for whole file
 * @lends module: closureFunction
 * @module closureFunction
 */
(function () {
    'use strict';
    /** @type {object} */
    var info,
    /** @type {string} */
        dataSet;
    /**
     * Binds data to HTML Page.
     * @method bindData
     * @param {Object} jsonData - Object contains data to put into HTML
     * @example
     * For Example : 
     * 'jsonData.headerImage' will hold the path of an image to be set into the html page.
     * For Img Tag attribute 'data-bind-templateSix', we set value as 'headerImage'(See Below).
     *               
     *     //  img data-bind-templateSix = "headerImage"
     *       
     * To set the value from Object to html tag, we need to put the code : 
     *     //  info.set('headerImage', jsonData.headerImage)
     *
     * here, first argument is the name of html tag's attribute value and,
     *             second is the value from javascript Object.
     */
function init()
{

}

     function countdown(fechaevento){
   var fecha = new Date();
   fecha = fechaevento;
    var hoy=new Date()
    var dias=0
    var horas=0
    var minutos=0
    var segundos=0
    
    var date1 = new Date(fechaevento);
  
        var diferencia=( date1.getTime() - hoy.getTime())/1000
        dias=Math.floor(diferencia/86400)
        diferencia=diferencia-(86400*dias)
        horas=Math.floor(diferencia/3600)
        diferencia=diferencia-(3600*horas)
        minutos=Math.floor(diferencia/60)
        diferencia=diferencia-(60*minutos)
        segundos=Math.floor(diferencia)

      
      console.log(hoy + "-" +fechaevento);
      var fecha = ""


      if(segundos> 0)
        fecha = 'En '+ segundos + ' segundos ';
          if(minutos> 0)
        fecha = 'En '+ minutos + ' minutos ';
          if(horas> 0)
          {
            if( date1.getHours()>12)
            fecha = 'Hoy a las '+ date1.getHours() + ' PM ';
          else
             fecha = 'Hoy a las '+ date1.getHours() + ' AM ';
          }
        if(dias> 0)
        fecha = 'En '+ dias + ' Dias ';
          
        return fecha;

    
}
function calendariolocal()
{  

  //var listen = setInterval(function() {

  fetch('http://api-mirror.azurewebsites.net/api/Values')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        console.log(data.events);
        console.log(data.labels);
        for(var i=0; i<5; i++) {
           var d = new Date(data.events[i].date);
                var time = d.toLocaleString("en-US");
                 var conversion = countdown(time);

          var fecha = conversion;
          var descripcion = data.events[i].desc;
          var correo = data.labels[i].desc;

          if(i==0)
          {
           $("#f0").html(fecha);
           $("#c0").html(descripcion);
            $("#e0").html(correo);
           
          }
           if(i==1)
          {
          $("#f1").html(fecha);
           $("#c1").html(descripcion);
              $("#e1").html(correo);
          }
           if(i==2)
          {
          $("#f2").html(fecha);
           $("#c2").html(descripcion);
              $("#e2").html(correo);
          }
           if(i==3)
          {
          $("#f3").html(fecha);
           $("#c3").html(descripcion);
              $("#e3").html(correo);
          }
           if(i==4)
          {
          $("#f4").html(fecha);
           $("#c4").html(descripcion);
              $("#e4").html(correo);
          }
      }

       
    })
    .catch(function(err) {
      console.log(err);
    });

    //}, 2000); 
}



function noti()
{
         $.ajax({
          method: "GET",
          url: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frpp.pe%2Ffeed%2Fpolitica",
          crossDomain: true,
          dataType: 'jsonp',

        })
          .done(function( data ) {
            console.log( "Data Saved:2"+data.status);
      
      
        var full = "";
       var noticias = data.items;
         
       
            for (var i = 0; i < noticias.length; i++) {
              
                        
              var noti = noticias[i];
              var title = noti.title;
              var foto = noti.enclosure.link;
               var desc = noti.description;              

              
              
         

            if(i ==0)
            {  
             full = full + '<div class="carousel-item active"> <img src="'+ foto +'" style="height: 230px; width:220px; float:left;" /> <label style ="color: white;display:table;font-size: 20px;margin-left: 234px;margin-top:-6px;font-family: &quot;b-medium&quot;;height: 87px; word-wrap:break-word;"> ' + title +' </label> <label style = "display:block; word-wrap:break-word; color: white; font-family: &quot;b-light-condensed&quot;; margin-left: 234px;margin-top:-7px; height: 100px;">'+ desc+' </label> </div>';
            }
            else
            {
            full = full + '<div class="carousel-item"> <img src="'+ foto +'" style="height: 230px; width:220px; float:left;" /> <label style ="color: white;display:table;font-size: 20px;margin-left: 234px;margin-top:-6px;font-family: &quot;b-medium&quot;; height: 87px; word-wrap:break-word;"> ' + title +' </label> <label style = "display:block; color: white; font-family: &quot;b-light-condensed&quot;; margin-left: 234px;margin-top:-7px; height: 100px; word-wrap:break-word;">'+ desc+' </label> </div>';
          
            }


          }
           console.log(foto);
           console.log(full);
          $("#333").html('<div id="carouselExampleControls" style="margin-left: 25px;" class="carousel slide" data-ride="carousel"> <div class="carousel-inner">'+ full + '</div> <a class="hidden carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span"> <span class="sr-only">Previous</span> </a> <a class="hidden carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div>')
          $('.carousel').carousel({  interval: 3000  });
      }); 

}
 function darFormatoAldia(day,month,year) {
    var formato ="";
    switch(day) {
        case "clear-day":
           info.set('asideBlock11Content1',jsonData.climaSunny);
        case "clear-night":
           info.set('asideBlock11Content1',jsonData.climaCloudy);
      case "rain":
           info.set('asideBlock11Content1',jsonData.climaRain);
        case "snow":
           info.set('asideBlock11Content1',jsonData.climaSunny);

      case "sleet":
          info.set('asideBlock11Content1',jsonData.climaCloudy);
        case "wind":
         info.set('asideBlock11Content1',jsonData.climaCloudy);

      case "fog":
        info.set('asideBlock11Content1',jsonData.climaCloudy);

     case "cloudy":
           info.set('asideBlock11Content1',jsonData.climaCloudy);
        case "partly-cloudy-day":
           info.set('asideBlock11Content1',jsonData.climaCloudy);

      case "partly-cloudy-night":
           info.set('asideBlock11Content1',jsonData.climaCloudy);

      default:
           info.set('asideBlock11Content1',jsonData.climaSunny);
    }
   } 



function getCurrency(from, to, textdesign, urls)
{
    $.ajax({
          method: "GET",
         //url: "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency="+from+"&to_currency="+to+"&apikey=2AS9DR6NX2GY2SW5",
          url: urls,
         
          crossDomain: true,
          dataType: 'json',
          async:true,
        
        })
          .done(function( data ) {
                     //  console.log( "currency: "+data.results[0].symbol)
      
            var results1 = data.results;
            var full = ""
           for (var i = 0; i < results1.length; i++) {
//                  console.log( "currency: "+data.results[i].symbol)

                  var open1 = data.results[i].open

                  var close1 = data.results[i].close
                  var result = ((Math.round(close1*100 -  open1*100))/100).toFixed(2)
                  
                  if(result> 0)
                  {
                    result =  '<p style="color: green; display:inline;">↑</p>'+ result
                  }
                  else if(result == 0)
                  {
                    result =  '<p style="color: blue; display:inline;">-</p>' + result
                  }
                  else if(result < 0)
                  {
                     result ='<p style="color: red; display:inline;">↓</p>' + Math.abs(result)
                  }
                 //  console.log(result)

                   full = full  + " " + data.results[i].symbol + result + " "


              }
              $(textdesign).html('<marquee direction="left" scrolldelay="100" behavior="scroll">'+full+'</marquee>');
              $(textdesign).html('<marquee direction="left" scrolldelay="100" behavior="scroll">'+full+'</marquee>');
         //   info.set(textdesign, full);
            //  console.log(full)

           //var value = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];

          //info.set(textdesign, from + " " + value);

      }); 

   /*  var text = '{'+
        '"Realtime Currency Exchange Rate": {'+
        '"1. From_Currency Code": "USD",'+
        '"2. From_Currency Name": "United States Dollar",'+
        '"3. To_Currency Code": "PEN",'+
        '"4. To_Currency Name": "Peruvian Nuevo Sol",'+
        '"5. Exchange Rate": "3.35550000",'+
        '"6. Last Refreshed": "2018-11-02 17:56:53",'+
        '"7. Time Zone": "UTC"'+
        '}'+
        '}'
        var obj = JSON.parse(text);
          // console.log(obj["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
            var value = obj["Realtime Currency Exchange Rate"]["5. Exchange Rate"];

            info.set(textdesign, from + " " + value);*/
}  
function updateTime()
{
      var dt = new Date();
      var time = dt.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true});    
       info.set('asideBlock1Content1', time);
}

    function bindData(jsonData) {
        info = new BindClass('templateSix');
        console.log("ssds");

updateTime();
noti();
calendariolocal();
var meses = [
  "enero", "febrero", "marzo",
  "abril", "mayo", "junio", "julio",
  "agosto", "septiembre", "octubre",
  "noviembre", "diciembre"
]
   var dias=["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];

var date = new Date();

var dia = date.getDate();
var mes = date.getMonth();
var yyy = date.getFullYear();
var fecha_formateada = dias[date.getUTCDay()]+', ' + dia + ' de ' + meses[mes];





var dateDay = fecha_formateada;


info.set('asideBlock1Content3', dateDay);

  //  info.set('asideBlock1Content3', jsonData.asideBlock1Content3);

 window.setInterval(updateTime,60000);
 window.setInterval(updateTime,1800000);
window.setInterval(calendariolocal,10000);


        $.ajax({
          method: "GET",
          url: "https://api.darksky.net/forecast/7af51a01e29c8ddb7a548fad3cf35a05/-12.193731,-76.708493?units=si",
          crossDomain: true,
          dataType: 'jsonp',

        })
          .done(function( data ) {
            console.log( "Data Saved: ");
          
             
       
                 info.set('asideBlock11Content2', "↑"+ changeicon2(data.daily.data[0].icon, Math.round(data.daily.data[0].temperatureMax )) );
             info.set('asideBlock11Content3',"↓"+ changeicon2(data.daily.data[0].icon, Math.round(data.daily.data[0].temperatureMin )));
       
function changeiconTitle(icon, temp) {
    switch(icon) {
        case "clear-day":
           return info.set('asideBlock11Content1',jsonData.weather_clear);
        case "clear-night":
           return info.set('asideBlock11Content1',jsonData.weather_clearnight);
        case "cloudy":
           return info.set('asideBlock11Content1',jsonData.weather_cloudy);
        case "fog":
           return info.set('asideBlock11Content1',jsonData.weather_fog);
        case "partly-cloudy-day":
           return info.set('asideBlock11Content1',jsonData.weather_partlycloudy);
        case "partly-cloudy-night":
           return info.set('asideBlock11Content1',jsonData.weather_partlycloudynight);
        case "rain":
           return info.set('asideBlock11Content1',jsonData.weather_rain);
        case "sleet":
           return info.set('asideBlock11Content1',jsonData.weather_sleet);
        case "snow":
           return info.set('asideBlock11Content1',jsonData.weather_snow);
        case "sunny":
           return info.set('asideBlock11Content1',jsonData.weather_sunny);
        case "wind":
           return info.set('asideBlock11Content1',jsonData.weather_sleet);
    }
   } 



            
   function changeicon(icon, temp) {
      return temp+"°";           
   } 

   function changeicon2(icon, temp) {
      return temp +"°C";
   }
   
   function getDayString(number) {
    switch(number) {
        case 0:
            return "D";
        case 1:
            return "L";
      case 2:
            return "M";
        case 3:
            return "M";

      case 4:
            return "J";
        case 5:
            return "V";

      case 6:
            return "S";

    }
}

var html = "";

html += "<tr>"
for(var i=0; i<7; ++i) {
    var date = new Date();
    date.setDate(date.getDate() + i);
    html += "<td>" + getDayString(date.getDay()) + "</td>";
}
html += "</tr>"


html += "<tr>"
for(var i=0; i<7; ++i) {
    html += "<td>"  + changeicon(data.daily.data[i].icon,Math.round(data.daily.data[i].temperatureMax )) + "</td>"
}
html += "</tr>"

html += "<tr>"
for(var i=0; i<7; ++i) {
    html += "<td>" +  changeicon(data.daily.data[i].icon, Math.round(data.daily.data[i].temperatureMin))  + "</td>"
}


getCurrency("USD","PEN", "#111",'https://marketdata.websol.barchart.com/getQuote.json?apikey=f40b136c6dc4451f9136bb53b9e70ffa&symbols=ZC*1,IBM,GOOGL,ADES,EEUU,ADES,ASIX,AEGN,AMTX,APD,AKS,AIN,ALB,ATI,AMRK,AMRC,AVD,AMWD,AMRS,AQMS,RKDA,AGX,ATIS,ATISW,AXTA,%5EEURUSD');
getCurrency("EUR","PEN", "#222",'https://marketdata.websol.barchart.com/getQuote.json?apikey=f40b136c6dc4451f9136bb53b9e70ffa&symbols=ZC*1,ACH,APWC,BHP,BAK,EVGN,MT,CSTM,GOLD,TS,LYB,TX,TS,UN,UL,RIO,PKX,SHI,TANH,NEWA,GURE,%5EEURUSD');

$("#tablaClima").html(html);

changeiconTitle(data.currently.icon, Math.round(data.currently.temperature));

var html2 = changeicon2(data.currently.icon, Math.round(data.currently.temperature));


function levenshtein(s1, s2) {
  var l1 = s1.length;
  var l2 = s2.length;
  var d = [];
  var c = 0;
  var a = 0;

  if(l1 == 0)
    return l2;

  if(l2 == 0)
    return l1;

  var d = new Array((l1 + 1) * (l2 + 1));
  a = l1 + 1;

  for(var i = 0; i <= l1; d[i] = i++);
  for(var j = 0; j <= l2; d[j * a] = j++);

  for(var i = 1; i <= l1; i++) {
    for(var j = 1; j <= l2; j++) {
      if(s1[i - 1] == s2[j - 1])
        c = 0;
      else
        c = 1;
      var r = d[j * a + i - 1] + 1;
      var s = d[(j - 1) * a + i] + 1;
      var t = d[(j - 1) * a + i - 1] + c;

      d[j * a + i] = Math.min(Math.min(r, s), t);
    }
  }

  return(d[l2 * a + l1]);
}
 ///indica la cantidad de cambios de caracterees para que sean iguales  == 5
console.log(levenshtein("Lonche con mamá","El Lonche con mi mamá"));

$("#logoClima").html(html2);

          });

        
        info.set('borderClima',jsonData.borderClima);
        /* Header Div */
        info.set('headerImage', jsonData.headerImage);
        /* Showcase Div */
        info.set('showcaseImg', jsonData.showcaseImg);
        info.set('heading1', jsonData.heading1);
        info.set('heading2', jsonData.heading2);
        info.set('heading3', jsonData.heading3);
        info.set('showcaseContent', jsonData.showcaseContent);
        /* Image Text Overlay */
        info.set('bannerImg', jsonData.bannerImg);
        info.set('NowNewsImage', jsonData.NowNewsImage);
       
        info.set('NowPlayingImage', jsonData.NowPlayingImage);
        info.set('bannerImgOverlayText', jsonData.bannerImgOverlayText);
        info.set('bannerImgOverlayContent', jsonData.bannerImgOverlayContent);
        /* Section Div */
        info.set('textSectionH1', jsonData.textSectionH1);
        info.set('textSectionH2', jsonData.textSectionH2);
        info.set('textSectionH3', jsonData.textSectionH3);
        info.set('textSectionH4', jsonData.textSectionH4);
        /* Side Div - 8 Blocks */
        // Block 1
       
        info.set('asideBlock1Content2', jsonData.asideBlock1Content2);

        // Block 2
        info.set('notificationtext', jsonData.notificationtext);
        info.set('notification0text', jsonData.notification0text);
        info.set('notification1text', jsonData.notification1text);
        info.set('notification2text', jsonData.notification2text);
        info.set('notification3text', jsonData.notification3text);
        info.set('notification4text', jsonData.notification4text);

        info.set('asideBlock3Content2', jsonData.asideBlock3Content2);
        info.set('asideBlock3Content3', jsonData.asideBlock3Content3);
        // Block 4
        info.set('asideBlock4Content1', jsonData.asideBlock4Content1);
        info.set('asideBlock4Content2', jsonData.asideBlock4Content2);
		info.set('asideBlock4Content3', jsonData.asideBlock4Content3);
        // Block 5
        info.set('asideBlock5Content1', jsonData.asideBlock5Content1);
        info.set('asideBlock5Content2', jsonData.asideBlock5Content2);
        info.set('asideBlock5Content3', jsonData.asideBlock5Content3);
        // Block 6
        info.set('asideBlock6Content1', jsonData.asideBlock6Content1);
        info.set('asideBlock6Content2', jsonData.asideBlock6Content2);
        info.set('asideBlock6Content3', jsonData.asideBlock6Content3);
        // Block 7
        info.set('asideBlock7Content1', jsonData.asideBlock7Content1);
        info.set('asideBlock7Content2', jsonData.asideBlock7Content2);
        info.set('asideBlock7Content3', jsonData.asideBlock7Content3);
        // Block 8
        info.set('asideBlock8Content1', jsonData.asideBlock8Content1);
        info.set('asideBlock8Content2', jsonData.asideBlock8Content2);
        info.set('asideBlock8Content3', jsonData.asideBlock8Content3);


        // Block 11
        info.set('asideBlock11Content1', jsonData.asideBlock11Content1);
        info.set('asideBlock11Content2', jsonData.asideBlock11Content2);
        info.set('asideBlock11Content3', jsonData.asideBlock11Content3);
        // Block 2
        info.set('asideBlock12Content1', jsonData.asideBlock12Content1);
        info.set('asideBlock12Content2', jsonData.asideBlock12Content2);
        info.set('asideBlock12Content3', jsonData.asideBlock12Content3);
        // Block 3
        info.set('asideBlock13Content1', jsonData.asideBlock13Content1);
        info.set('asideBlock13Content2', jsonData.asideBlock13Content2);
        info.set('asideBlock13Content3', jsonData.asideBlock13Content3);
        // Block 4
        info.set('asideBlock14Content1', jsonData.asideBlock14Content1);
        info.set('asideBlock14Content2', jsonData.asideBlock14Content2);
        info.set('asideBlock14Content3', jsonData.asideBlock14Content3);

          info.set('asideBlock13Content2X', jsonData.asideBlock13Content2X);
        info.set('asideBlock13Content3X', jsonData.asideBlock13Content3X);
        // Block 4
        info.set('asideBlock14Content1X', jsonData.asideBlock14Content1X);
        info.set('asideBlock14Content2X', jsonData.asideBlock14Content2X);
        info.set('asideBlock14Content3X', jsonData.asideBlock14Content3X);



        // Block 5
        info.set('asideBlock15Content1', jsonData.asideBlock15Content1);
        info.set('asideBlock15Content2', jsonData.asideBlock15Content2);
        info.set('asideBlock15Content3', jsonData.asideBlock15Content3);
        // Block 6
        info.set('asideBlock16Content1', jsonData.asideBlock16Content1);
        info.set('asideBlock16Content2', jsonData.asideBlock16Content2);
        info.set('asideBlock16Content3', jsonData.asideBlock16Content3);
        // Block 7
        info.set('asideBlock17Content1', jsonData.asideBlock17Content1);
        info.set('asideBlock17Content2', jsonData.asideBlock17Content2);
        info.set('asideBlock17Content3', jsonData.asideBlock17Content3);
        // Block 8
        info.set('asideBlock18Content1', jsonData.asideBlock18Content1);
        info.set('asideBlock18Content2', jsonData.asideBlock18Content2);
        info.set('asideBlock18Content3', jsonData.asideBlock18Content3);
    }
    /**
     * Represents Ajax Reauest.
     * @method loadDoc
     * @param {string} method - method of the request.
     * @param {string} url - url of the request.
     */
    function loadDoc(method, url) {
        var req = new XMLHttpRequest();
        req.open(method, url, true);
        req.onload = function () {
            dataSet = JSON.parse(req.responseText);
            bindData(dataSet);
        };
        req.onerror = function () {
            throw 'Cannot load file ' + url;
        };
        req.send();
    }
    /** @function */
    loadDoc('GET', 'data/data.json');
}());