<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/assets/php/character-generator.php";

    error_reporting(E_ALL);

    $itemName = $_REQUEST['q'];
    $table = $_REQUEST['table'];

    $items = $process->getEquipment($table,"*",$itemName);
    
    switch($table){
        case "weapons":
            foreach($items as $item){
                $name = $item['name'];
                $type = $item['proficiency']." ".$item['type'];
                $damage = $item['damage']." ".$item['damage_type'];
                $weight = $item['weight'];
                $price = $item['price'];
                $properties = $item['properties'];
                $range = $item['ranges'];

                echo "<td name='weapon' value='$name'>$name</td><td>$type</td><td>$damage</td><td>$weight lbs</td><td>$price</td><td>$properties</td><td>$range</td>";
            };
            break;
        case "armour":
            foreach($items as $item){
                $name = $item['name'];
                $type = $item['type'];
                switch($type){
                    case "Light":
                        $dexBonus = '∞';
                        break;
                    case "Medium":
                        $dexBonus = 2;
                        break;
                    case "Heavy":
                        $dexBonus = 0;
                        break;
                    case "Shield":
                        $dexBonus = 0;
                        break;
                    default:
                        $dexBonus = 0;
                }
                if($dexBonus){
                    $ac = $item['base_ac']."+DEX(".$dexBonus.")";
                }else{
                    $ac = $item['base_ac'];
                }
                $weight = $item['weight'];
                $price = $item['price'];
                $minStrength = $item['min_strength'];
                $stealth = $item['stealth'];

                echo "<td name='armour' value='$name'>$name</td><td>$type</td><td>$ac</td><td>$weight lbs</td><td>$price</td><td id='minStr'>$minStrength</td><td>$stealth</td>";
            };
            break;
        default:
            echo "ERROR with switch statement in AJAX call - invalid table name provided.";
    }
?>