"use strict";

let n = "";
let nBefore = "";

window.addEventListener("DOMContentLoaded",
    function(){
        //ページ全体が読み込まれたタイミングで実行するコード

        // ヘッダーのテキストエフェクト
        $("header").textillate({
            loop: false, // ループのオンオフ
            minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
            initialDelay: 2000,   // 遅延時間
            autoStart: true,      // アニメーションを自動的にスタート
        in: {                 // フェードインのエフェクトの詳細設定
            effect: "fadeInLeftBig", // エフェクトの名前（animate.css参照）
            delayScale: 1.5,         // 遅延時間の指数
            delay: 50,               // 文字ごとの遅延時間
            sync: false,             // trueはアニメーションをすべての文字に同時に適用
            huffle: true            // trueは文字を順番にではなく、ランダムに
            }
        });
      
        // おみくじボタン（id="btn1"）　ボヤァと表示させる
        $(function(){
            ScrollReveal().reveal("#btn1", { duration: 9000 });
        });

        //ポップアップメッセージ
        setTimeout(
            function () {
                let popMessage = "いらっしゃい！おみくじ引いてって！";
                window.alert(popMessage);
            },
            "5000"
        );

    },false
);

//おみくじボタン1
const btn1=document.getElementById("btn1");
btn1.addEventListener("click",
    function(){

        /* let resultText = ["大吉!!!!!", "中吉!!!", "小吉!!", "末吉!", "凶。。"];
        let resultColor = ["#ff0000", "#ff1493", "#ff69b4", "#ff8c00", "#1e90ff"];
        let resultFontSize = ["90px", "70px", "60px", "50px", "40px"]; */
        let resultText = ["pictures/daikichi.png", "pictures/chukichi.png", "pictures/syokichi.png", "pictures/suekichi.png", "pictures/daikyo.png"];
        let resultMaxSpeed= [10, 10, 8, 5, 5];
        let resultMaxSize = [30, 30, 30, 40, 30];
        let resultImage = ["pictures/star.png", "pictures/sakura_hanabira.png", "pictures/sakura_hanabira.png", "pictures/leaf.png", "pictures/snowflakes.png"];
        let resultSound = ["sound/omikuji_sound1.mp3", "sound/omikuji_sound2.mp3", "sound/omikuji_sound2.mp3", "sound/omikuji_sound2.mp3", "sound/omikuji_sound3.mp3"];
        let n = Math.floor(Math.random() * resultText.length);
        /* omikujiText.textContent = resultText[n];
        omikujiText.style.color = resultColor[n];
        omikujiText.style.fontSize = resultFontSize[n]; */

        omikujiTextImage.src = resultText[n];
        omikujiTextImage.classList.add("omikujiPaper");

        omikujiTextImage.addEventListener("animationEnd",
            function() {
                omikujiTextImage.classList.remove("omikujiPaper");
            }, false
        );

        
        let music = new Audio(resultSound[n]);
        music.currentTime = 0;
        music.play();

        // snowfall stop
        $(document).snowfall("clear");

        // jQueryのsnowfall
        $(document).ready(function(){
           
            $(document).snowfall({
                maxSpeed : resultMaxSpeed[n],
                maxSize : resultMaxSize[n],
                image : resultImage[n],
                
            });
            
        });

    },false
);