<?php
// Workshop 16.5
$peopleData = array (
    0 => array ('name' => 'Antony Lewis','image' => 'photos/1.png', 'location' => 'Seattle'),
    1 => array ('name' => 'Eve Liza', 'image' => 'photos/2.png', 'location' => 'Miami'),
    2 => array ('name' => 'Ellen Wenche', 'image' => 'photos/2.png', 'location' => 'Orlando'),
    3 => array ('name' => 'Cindy Petunia', 'image' => 'photos/2.png', 'location' => 'Toronto'),
    4 => array ('name' => 'Inga Johanna', 'image' => 'photos/2.png', 'location' => 'Vancouver'),
    5 => array ('name' => 'Violet Kitty', 'image' => 'photos/2.png', 'location' => 'Ottawa'),
    6 => array ('name' => 'Elizabeth Dean', 'image' => 'photos/2.png', 'location' => 'Phoenix'),
);

$query = $_REQUEST["q"];
$peopleHint = "";
//var_dump($query);

if ($query !== "") {
    $query = strtolower($query);
    $length = strlen($query);

    foreach($peopleData as $person){
        $personName = $person['name'];
        //var_dump($personName);

        if (stristr($query, substr($personName, 0, $length))) {
            if ($peopleHint === "") {
                $peopleHint = $personName;
                //var_dump($peopleHint);
            } else {
                $peopleHint .= ", $personName";
            }
        }
    }

}

echo $peopleHint === "" ? "no suggestion" : $peopleHint;