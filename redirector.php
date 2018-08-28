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
            $query = "SELECT $string FROM shortened";
            $result = $this->connect()->query($query);
            if($result->rowCount()> 0){
                return true;
            } else {
                return false;
            }
        }

        function enterData(){
        }
        
        function generateString(){
        }

    }

    $redirector = new redirector();
?>