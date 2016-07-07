import $ from 'jquery';
import './style.css'

let x = 0;

function timePassed() {
  x++;
  $('#main').html("You've been on the page for " + x + "  seconds.");
}

setInterval(function(){timePassed();}, 1000);
