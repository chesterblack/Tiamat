<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/assets/php/character-generator.php";

    error_reporting(E_ALL);

    $weaponName = $_REQUEST['q'];

    $weapons = $process->getEquipment("weapons","*",$weaponName);
    
    foreach($weapons as $weapon){
        $name = $weapon['name'];
        $type = $weapon['proficiency']." ".$weapon['type'];
        $damage = $weapon['damage']." ".$weapon['damage_type'];
        $weight = $weapon['weight'];
        $price = $weapon['price'];
        $properties = $weapon['properties'];
        // if($weapon['ranges'] != '0'){
            $range = $weapon['ranges'];
        // }



        echo "<td name='weapon' value='$name'>$name</td><td>$type</td><td>$damage</td><td>$weight</td><td>$price</td><td>$properties</td><td>$range</td>";
    }
?>