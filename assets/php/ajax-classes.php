<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/assets/php/character-generator.php";

    error_reporting(E_ALL);

    $mainclass = $_REQUEST['q'];

    $classes = $process->getClasses("subclass_name",$mainclass);

    // print_r($classes);

    foreach($classes as $class){
        $subclass_name = $class['subclass_name'];
        echo "<option value='$subclass_name'>".str_replace('_', ' ', $subclass_name)."</option>\n";
    }
?>