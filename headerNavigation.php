<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>NavBar</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="">
    <script src="fontawesome-free-5.5.0-web\js\all.js"></script>
</head>
<body>
    <style>
        *{
            margin:0;
            padding:0;
            list-style:none;
            text-decoration:none;
            box-sizing: border-box;
        }
        nav{
            display: flex;
            justify-content: space-around;
        }

        .nav_button{
            width:100px;
            padding: 2%;
            cursor: pointer;
            border: 4px solid blue;
        }
        .nav_button>*{
            height: 4px;
            background-color: blue;
            width: 80%;
            margin: 7% auto;
        }
        ul{
            display: inline;
            width: 100%;
            background-color: rgb(0,50, 240);
        }
        ul li{
            display: inline;
            text-align: center;
        }

        ul li a{
            font-size: 1.4rem;
            padding: 1rem;
        }

    </style>
        <nav>
            <div>
                <img src="" alt="logo">
            </div>
            <div class="nav_button">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <header>

        </header>
        <script>
            
        </script>
</body>