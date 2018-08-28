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
            $error = "You've already shortened this to " . $redirector->findNewUrl($urlIn);

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