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

// Fetch both images + videos
$sql = "
    SELECT 'image' AS type, id, image_url AS url, image_description AS title, season_id, status 
    FROM image_tiles 
    WHERE status = 'Y'
    UNION ALL
    SELECT 'video' AS type, id, video_url AS url, NULL AS title, season_id, status 
    FROM video_tiles 
    WHERE status = 'Y'
    ORDER BY id DESC
";

$result = $conn->query($sql);

$data = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);
$conn->close();
?>
