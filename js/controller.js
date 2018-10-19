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


function updateTime()
{
      var dt = new Date();
      var time = null;
      if(dt.getMinutes() <10)
      { 
        if(dt.getSeconds() <10)
       time = dt.getHours() + ":0" + dt.getMinutes() +":0" +dt.getSeconds()
      else
         time = dt.getHours() + ":0" + dt.getMinutes() +":" +dt.getSeconds()
       }   
    else
      {
         if(dt.getSeconds() <10)
       time = dt.getHours() + ":" + dt.getMinutes() +":0" +dt.getSeconds()
      else
         time = dt.getHours() + ":" + dt.getMinutes() +":" +dt.getSeconds()
       
       } 
       info.set('asideBlock1Content1', time);

}
    function bindData(jsonData) {
        info = new BindClass('templateSix');
        console.log("ssds");

updateTime();

var date2 = new Date();
var dateDay = date2.toDateString() + " - " + date2.getDate() +"/"
                + (date2.getMonth()+1)  + "/" 
                + date2.getFullYear()
info.set('asideBlock1Content3', dateDay);

  //  info.set('asideBlock1Content3', jsonData.asideBlock1Content3);

 window.setInterval(updateTime,100);





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



            
             function changeicon(icon, temp) {
            return temp;

            
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


$("#tablaClima").html(html);

changeiconTitle(data.currently.icon, Math.round(data.currently.temperature));

var html2 = changeicon2(data.currently.icon, Math.round(data.currently.temperature));
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