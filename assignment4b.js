<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Div Example</title>
    <style>
        
        #container {
            border: 2px solid #333;
            padding: 10px;
            margin: 20px auto;
            width: 80%;
            max-width: 600px;
        }

        
        .new-div {
            border: 1px solid #000;
            margin: 10px 0;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div id="container">
        
    </div>

    <script>
        
        function createDiv(width, height, text) {
            
            width = width + "px";
            height = height + "px";

            
            var newDiv = document.createElement("div");

        
            newDiv.className = "new-div";

            
            newDiv.style.width = width;
            newDiv.style.height = height;

            
            newDiv.textContent = text;

            
            var container = document.getElementById("container");

    
            container.appendChild(newDiv);
        }
        createDiv(200, 100, "Hello, World!");
    </script>
</body>
</html>
