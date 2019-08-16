console.log('helloworld')


var weaponsList = <?php json_encode($weapons); ?>;



var plusno = document.getElementsByClassName('plus');
console.log(plusno)

function addWeapon(){
    document.getElementById('weapons').insertAdjacentHTML("beforeend","<li>WEAPON: <select id=\"weapon\" name=\"weapon\" onchange=\"showWeaponProperties()\">"+addSelectOptions()+"</select> <div class='arrow'></div><script>function showWeaponProperties(){var xmlHttp=new XMLHttpRequest(); xmlHttp.onreadystatechange=function(){if (this.readyState==4 && this.status==200){document.getElementById('weapon-properties').innerHTML=this.responseText;}}; var selectedWeapon=document.getElementById('weapon'); xmlHttp.open(\"GET\", \"/assets/php/ajax-weapons.php?q=\" + selectedWeapon.options[selectedWeapon.selectedIndex].value, true); xmlHttp.send();}showWeaponProperties() </script> </li><div class='arrow'");
}

function addSelectOptions(){
    weaponsList.forEach(function(entry){
        var weaponSelects = document.getElementsByClassName('weaponselect');

        weaponsSelects.forEach(function(select){
            select.innerHTML += "<option value='"+entry.shortname+"'>"+entry.name+"</option>"
        });
    });
}