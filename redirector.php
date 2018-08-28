<?php

    //Get database details that haven't been committed to git
    require_once "details.php";

    class redirector{

        public $pdo;
        public $status;

        //Connect to the database
        function connect(){
            try {
                $host = $details->$host;
                $name = $details->$name;
                $user = $details->$user;
                $pass = $details->$pass;

                //Create a new PDO to connect to database
                $this->pdo = new PDO("mysql:host=$host;dbname=$name", $user, $pass);

                //Throw an exception if error occurs so that the catch works if something goes wrong
                $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $this->status = "PDO created";

            } catch (PDOException $e) {
                $this->status = "PDO failed";

                //Echoes error message
                echo $this->status . $e->getMessage();
            }
            return $this->pdo;
        }
        
        //Check to see if the generated string is already in the database
        function doesStringExist($string){
            $query = "SELECT $string FROM new_url";
            $result = $this->connect()->query($query);
            if($result->rowCount()> 0){
                return true;
            } else {
                return false;
            }
        }

        //Enter the new and old URLs into the database
        function enterData($newUrl, $urlIn){
            $connect = $this->connect();

            //Preparing the statement that we'll bind the parameters to later so people can't sneak their own code in and mess up the db
            $stmt = $connect->prepare("INSERT INTO url_redirector (old_url, new_url)
            VALUES (:urlIn, :newUrl)");

            try {
                $stmt->bindParam(':urlIn', $urlIn);
                $stmt->bindParam(':newUrl', $newUrl);
            } catch(PDOException $e) {
                echo($e->getMessage());
            }
        }
        
        //Create random alphanumeric string to serve as the shortened URL and returns it if it's not already in the db
        function generateString(){
            $inDB = TRUE;

            //Loops over until the string is unique
            while($inDB){
                //Characters to use in the string
                $characters = "qwertyuiopasdfghjklzxcvbnm1234567890";
                $string = "";

                //For loop - $i = 0 defines $i as 0 to start off with. $i < 6 means that it loops until this is met, so once $i isn't less than 6 any more. $i++ increases $i by 1 every time
                for($i = 0; $i < 6; $i++){

                    // v Appends this next bit to $string
                    $string .= $characters[rand(0, strlen($characters))];
                            // ^ Randomly decides a number between 0 and the length of $characters
                }

                $inDB = doesStringExist($string);
            }

            //This does basically nothing but I kept getting confused later on with it called $string
            $newUrl = $string;

            return $newUrl;
        }

    }

    $redirector = new redirector();
?>