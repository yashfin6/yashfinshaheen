<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Styler</title>
    <link rel="stylesheet" href="style4d.css">
</head>
<body>

    <div class='text-here' id='text-container'>This is some example text</div>

    <input type="text" id="colorbox" placeholder="Enter color">

    <button id="colorchange">Change Colour</button>

    <br><br>

    <input type="range" id="fontsize" min="10" max="100" value="55">

    <br><br>

    <button id="italic" class="stylebt">Italics</button>
    <button id="underline" class="stylebt">Underline</button>
    <button id="bold" class="stylebt">Bold</button>

    <br><br>

    <select id="list">
        <option value="serif">Serif</option>
        <option value="sans-serif">Sans-Serif</option>
        <option value="monospace">Monospace</option>
        <option value="cursive">Cursive</option>
        <option value="fantasy">Fantasy</option>
    </select>

    <br><br>

    <button id="getstyle">Get CSS</button>

    <br><br>
    <p id="css-props"></p>

    <script src="script4d.jsjs"></script>
</body>
</html>
