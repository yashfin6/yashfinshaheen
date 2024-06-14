<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Visibility</title>
    <style>
        
        #useless-paragraph {
            display: block; 
            margin-bottom: 10px; 
        }

        
        #toggle-button {
            padding: 8px 16px;
            cursor: pointer;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>I am a headline made with HTML</h1>
    <br />
    
    <p id="useless-paragraph">Useless paragraph.</p>
    <br />
    
    <button id="toggle-button">Toggle Button</button>

    <script>
        
        document.getElementById("toggle-button").addEventListener("click", function() {
            var paragraph = document.getElementById("useless-paragraph");

            if (paragraph.style.display === "none" || paragraph.style.display === "") {
                paragraph.style.display = "block";
            } else {
                paragraph.style.display = "none";
            }
        });
    </script>
</body>
</html>
