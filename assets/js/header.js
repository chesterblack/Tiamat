document.write('\
<head>\
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/tiamat-new.png">\
    <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">\
    <meta charset="utf-8">\
\
    <title>T I A M A T</title>\
\
    <link rel="stylesheet" href="assets/css/main.css?v=1.0">\
\
    <!--[if lt IE 9]>\
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>\
    <![endif]-->\
</head>\
\
<div id="header">\
        <div id="nav">\
            <button onclick="turnRed(),activateButton()" id="red-button"></button>\
            <button onclick="turnBlue(),activateButton()" id="blue-button"></button>\
            <button onclick="turnGreen(),activateButton()" id="green-button"></button>\
            <button onclick="turnWhite(),activateButton()" id="white-button"></button>\
            <button onclick="turnBlack(),activateButton()" id="black-button"></button>\
        </div>\
        <a href="/index.html"><img src="assets/images/tiamat-new.png" id="logo">\
        <h1 id="header">Tiamat</h1></a>\
    </div>\
');