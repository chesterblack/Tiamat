<?php
    error_reporting(E_ALL);
    $errors = [];

    function connect(){
        $host = "127.0.0.1";
        $name = "languages";
        $user = "chester";
        $pass = "Ictis1997!";
        try {
            $pdo = new PDO("mysql:host=$host;port=3306;dbname=$name", $user, $pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $success = true;
        } catch (PDOException $e) {
            echo $e;
            $success = false;
        }
        return $create = $pdo;
    }


    if (isset($_GET['language'])) {
        $language = htmlentities($_GET['language']);

        if ($language == "") {
            $errors[] = "Language query empty";
        }
    } else {
        $errors[] = "Language not set";
    }

    if (isset($_GET['searchterm'])) {
        $searchTerm = $_GET['searchterm'];

        if ($searchTerm == "") {
            $errors[] = "Search term empty";
        }
    } else {
        $errors[] = "Search term not recieved";
    }

    if ($errors) {
        echo json_encode($errors);
    } else {
        $conn = connect();

        // $query = "SELECT * FROM alfstranii_glossary WHERE $language LIKE '%$searchTerm%'";
        // $results = $conn->query($query)->fetchAll(PDO::FETCH_ASSOC);

        // echo json_encode($results);
    }

?>