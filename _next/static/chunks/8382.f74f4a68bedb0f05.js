"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8382],{8382:function(e,r,l){l.r(r);var o=l(3270);const s={blue_sheep:["/Program Files/eSheep/blue_sheep.xml",12],eSheep:["/Program Files/eSheep/eSheep.xml",12],fox:["/Program Files/eSheep/fox.xml",4],green_sheep:["/Program Files/eSheep/green_sheep.xml",12],mimiko:["/Program Files/eSheep/mimiko.xml",4],neko:["/Program Files/eSheep/neko.xml",10],orange_sheep:["/Program Files/eSheep/orange_sheep.xml",12],pingus:["/Program Files/eSheep/pingus.xml",10],red_sheep:["/Program Files/eSheep/red_sheep.xml",12],yellow_sheep:["/Program Files/eSheep/yellow_sheep.xml",12]};let h=!1;r.default=()=>(0,o.mb)(["/Program Files/eSheep/eSheep.js"]).then((()=>{if(window.Sheep){const e=new window.Sheep({allowPopup:"no",collisionsWith:["nav","section"],spawnContainer:document.querySelector("main")});h?e.Start((()=>{const e=Object.keys(s).flatMap((e=>{const[,r]=s[e];return Array.from({length:r}).fill(e)})),r=Math.floor(Math.random()*e.length),[l]=s[e[r]];return l})()):(h=!0,e.Start("/Program Files/eSheep/eSheep.xml"))}}))}}]);