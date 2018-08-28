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
        
        function doesStringExist($string){
            
        }

        function enterData(){
        }
        
        function generateString(){
        }

    }

    $redirector = new redirector();
?>