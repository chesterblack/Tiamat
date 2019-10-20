<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/assets/php/character-generator.php";

    error_reporting(E_ALL);

    $mainrace = $_GET['q'];

    $arrays = $process->getRaces("subrace_name",$mainrace);

    foreach ($arrays as $array){
        if(is_array($array)){
            $subrace_name = $array['subrace_name'];

            if (isset($_GET['editing'])) {
                if ($_GET['editing'] == $subrace_name) {
                    echo "<option value='$subrace_name' selected>$subrace_name</option>\n";
                } else {
                    echo "<option value='$subrace_name'>$subrace_name</option>\n";
                }
            } else {
                echo "<option value='$subrace_name'>$subrace_name</option>\n";
            }
        }
    }
?>