<?php
// Workshop 16.5
$peopleData = array (
    0 => array ('name' => 'Antony Lewis','image' => 'https://robohash.org/autducimusvelit.jpg?size=30x30&set=set1', 'location' => 'Seattle'),
    1 => array ('name' => 'Eve Liza', 'image' => 'https://robohash.org/perspiciatisdolordolore.bmp?size=30x30&set=set1', 'location' => 'Miami'),
    2 => array ('name' => 'Ellen Wenche', 'image' => 'https://robohash.org/sitquiut.jpg?size=30x30&set=set1', 'location' => 'Orlando'),
    3 => array ('name' => 'Cindy Petunia', 'image' => 'https://robohash.org/autducimusvelit.jpg?size=30x30&set=set1', 'location' => 'Toronto'),
    4 => array ('name' => 'Inga Johanna', 'image' => 'https://robohash.org/autducimusvelit.jpg?size=30x30&set=set1', 'location' => 'Vancouver'),
    5 => array ('name' => 'Violet Kitty', 'image' => 'https://robohash.org/autducimusvelit.jpg?size=30x30&set=set1', 'location' => 'Ottawa'),
    6 => array ('name' => 'Elizabeth Dean', 'image' => 'https://robohash.org/autducimusvelit.jpg?size=30x30&set=set1', 'location' => 'Phoenix'),
);

$query = $_REQUEST["q"];
$peopleHint = "";
$image = $location = "";

if ($query !== "") {
    $query = strtolower($query);
    $length = strlen($query);

    foreach($peopleData as $person) {
        $personName = $person['name'];
        $image = $person['image'];
        $location = $person['location'];

        if (stristr($query, substr($personName, 0, $length))) {

            if ($peopleHint === "") {
                //$peopleHint = $personName;
                $peopleHint = $personName . ", " .$location;
//                $peopleHint = $image. ", " .$personName . ", " .$location;

            } else {
//                $peopleHint .= ", $personName";
                $peopleHint .= ", $personName" . ", " .$location;
//                $peopleHint .= "$image , $personName" . ", " .$location;
            }
        }
    }
}

//echo $peopleHint === "" ? "no suggestion" : $peopleHint;
echo $peopleHint === "" ? "no suggestion" : json_encode($peopleHint);