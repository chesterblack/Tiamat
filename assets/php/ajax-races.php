<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/assets/php/character-generator.php";

    error_reporting(E_ALL);

    $mainrace = $_REQUEST['q'];

    $arrays = $process->getRaces("subrace_name",$mainrace);

    foreach ($arrays as $array){
        if(is_array($array)){
            $subrace_name = $array['subrace_name'];
            echo "<option value='$subrace_name'>$subrace_name</option>\n";
        }
    }
    ?>