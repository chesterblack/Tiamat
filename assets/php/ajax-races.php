<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/assets/php/character-generator.php";

    error_reporting(E_ALL);

    $mainrace = $_REQUEST['q'];

    $arrays = $process->getRaces("subrace_name",$mainrace);

    $has_subraces = FALSE;

    foreach ($arrays as $array){
        if(is_array($array)){
            $subrace_name = $array['subrace_name'];
            $has_subraces = TRUE;
            echo "<option value='$subrace_name'>$subrace_name</option>\n";
        }
    }
    if($has_subraces){
        echo "<option value=''>None</option>";
    }
    ?>