<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = "localhost"; 
$user = "u474983387_kapil";
$pass = "K@p!l@12345";
$db   = "u474983387_kapil";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// ✅ Fetch only photos
$sql = "SELECT id, image_url, image_description, season_id, status 
        FROM image_tiles 
        WHERE status = 'Y'
        ORDER BY id DESC";

$result = $conn->query($sql);

$data = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = [
            "id" => $row["id"],
            "url" => $row["image_url"],
            "title" => $row["image_description"],
            "season_id" => $row["season_id"]
        ];
    }
}

echo json_encode($data);
$conn->close();
?>
