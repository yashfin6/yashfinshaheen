<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode Toggle</title>
    <style>
    body {
        transition: background-color 0.3s ease;
        font-family: Arial, sans-serif;
    }
    
    .container {
        padding: 20px;
        text-align: center;
    }
    .toggle-btn {
        padding: 10px 20px;
        cursor: pointer;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
    }
    
    .dark-mode {
        background-color: #222;
        color: #fff;
    }
    
</style>
</head>
<body>
    <div class="container">
        <h1>Dark Mode Toggle</h1>
        <button class="toggle-btn" onclick="toggleDarkMode()">Toggle Dark Mode</button>
    </div>
    <script >function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode');
    }
        
    </script>
</body>
</html>
