<!DOCtype html>
<html>
    <head>
        <link rel="stylesheet" href="">
        <meta content="" description="">
    </head>
    <body>
        <div id="demo">
            <h2>Let Ajax change this text</h2>
            <button type="button" onclick="loadDoc()">Change Me</button>
        </div>
        <script>
        var xhttp;
        if(window.XMLHttpRequest){
            xhttp = new XMLHttpRequest();
        } else{
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
            function loadDoc(){
                //var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        document.getElementById("demo").innerHTML = this.responseText;
                    }
                };
                xhttp.open("GET", "ajax_info.txt",true);
                xhttp.send();
            }
        </script>
    </body>
</html>