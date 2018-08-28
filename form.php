<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>URL Redirector</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

    <?php
    
    require_once "redirector.php";

    if(isset($_POST['urlIn'])){
        $urlIn = htmlentities($_POST['urlIn']);

        $alreadyInputted = $redirector->doesOldUrlExist($urlIn);

        if($alreadyInputted){
            $error = "You've already shortened this";
            //Later I'll create another function to return what it's been shortened to, or I'll run out of time and it'll just be a really annoying useless message
            echo $error;
        } else {
            $newUrl = $redirector->generateString();
            $redirector->enterData($newUrl, $urlIn);
            $redirector->createRedirect($newUrl, $urlIn);

            echo "<a href=" . $newUrl . ">" . $newUrl . "</a>";
        }
    }
    
    ?>

    <form action="" method="post">
    URL: <input type="text" name="urlIn">
    <input type="submit">
    
    </form>
</body>
</html>