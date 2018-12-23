<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/assets/php/character-generator.php";

    error_reporting(E_ALL);

    $mainrace = $_REQUEST['q'];

    $races = $process->getRaces("subrace_name",$mainrace);

    if($races['subrace_name'] !== "nope"){
        foreach($races as $race){
            $subrace_name = $race['subrace_name'];
            echo "<option value='$subrace_name'>$subrace_name</option>\n";
        }
        echo "<option value=''>None</option>";
    }
    ?>