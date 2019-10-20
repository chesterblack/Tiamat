<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/assets/php/character-generator.php";

    error_reporting(E_ALL);

    $mainclass = $_GET['q'];

    $classes = $process->getClasses("subclass_name",$mainclass);

    foreach($classes as $class){
        $subclass_name = $class['subclass_name'];

        if (isset($_GET['editing'])) {
            if ($_GET['editing'] == $subclass_name) {
                echo "<option value='$subclass_name' selected>".str_replace('_', ' ', $subclass_name)."</option>\n";
            } else {
                echo "<option value='$subclass_name'>".str_replace('_', ' ', $subclass_name)."</option>\n";
            }
        } else {
            echo "<option value='$subclass_name'>".str_replace('_', ' ', $subclass_name)."</option>\n";
        }
    }
?>