<head>
    <button onclick="openGame()">about:blank</button>
    <script>
        
    function openGame() {
        var win = window.open();
        var url = "https://unblocked-games.s3.amazonaws.com/index.html";       //put url here
        var hide = '<title>about:blank</title><link rel="icon" type="image/x-icon" href="https://clcem1211.onrender.com/Login.ico">';

        // Insert the title and favicon into the new window's document
        win.document.head.innerHTML = hide;
        
        // Create iframe and set attributes
        var iframe = win.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = url;
        
        // Append iframe to the window's document body
        win.document.body.appendChild(iframe);
        window.location.href = "about:blank";

    }
</script>
</head>
