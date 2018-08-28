<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>URL Redirector</title>

    <link rel="stylesheet" type="text/css" href="form-style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,900" rel="stylesheet">

    <link rel="icon" type="image/png" sizes="96x96" href="https://www.aceville.com/assets/favicon/favicon-96x96.png">

    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

    <?php
    
    require_once "redirector.php";

    $message = "";
    $valid = TRUE;

    if(isset($_POST['urlIn'])){
        $urlIn = htmlentities($_POST['urlIn']);

        $valid = $redirector->validateURL($urlIn);

        if(!$valid){
            $message = "<p>Please enter a valid URL</p>";
        }else{
            $alreadyInputted = $redirector->doesOldUrlExist($urlIn);

            if($alreadyInputted){
                $message = "<p>You've already shortened this to " . "<a href='" . $redirector->findNewUrl($urlIn) . "'>tiamat.uk/" . $redirector->findNewUrl($urlIn) . "</a></p>";
            } else {
                $newUrl = $redirector->generateString();
                $redirector->enterData($newUrl, $urlIn);
                $redirector->createRedirect($newUrl, $urlIn);

                $message = "<p>Your new URL is <a href='" . $newUrl . "'>tiamat.uk/" . $newUrl . "</a></p>";
            }
        }
    }
    
    ?>

    <div class="container">

        <img src="aceville-logo.jpg" />

        <h1>URL <span>Shortener</span></h1>

        <h2>Please include http://</h2>

        <form action="" method="post">
            URL: <input type="text" name="urlIn">
            <input type="submit">
        </form>

        <?php
        
        if($message){
            echo $message;
        }

        ?>

    </div>

</body>
</html>