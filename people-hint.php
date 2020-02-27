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
$image = "";
$location = "";

if ($query !== "") {
    $query = strtolower($query);
    $length = strlen($query);
//    var_dump($query);

    foreach($peopleData as $person){
        $personName = $person['name'];

        if (stristr($query, substr($personName, 0, $length))) {

            if ($peopleHint === "") {
                $peopleHint = $personName;
                $image = $person['image'];
                $location = $person['location'];
            } else {
                $peopleHint .= ", $personName, $image, $location";
            }
        }
    }

}

echo $peopleHint === "" ? "no suggestion" : $peopleHint;