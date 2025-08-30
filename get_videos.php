<?php
header("Access-Control-Allow-Origin: *"); // Allow frontend to fetch
header("Content-Type: application/json");

$host = "localhost"; 
$user = "u474983387_kapil";
$pass = "K@p!l@12345";
$dbname = "u474983387_kapil";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

// Fetch only active videos
$sql = "SELECT id, hid, video_url, season_id, status FROM video_tiles WHERE status = 'Y'";
$result = $conn->query($sql);

$videos = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $videos[] = [
            "id" => $row["id"],
            "title" => "Video " . $row["id"], // You can add a title field later in DB
            "category" => "General",          // Default (or add a category column later)
            "thumbnail" => "https://placehold.co/600x400?text=Video+" . $row["id"], // Temporary thumbnail
            "videoUrl" => $row["video_url"],
            "description" => "Season: " . $row["season_id"],
            "artist" => "System", // Placeholder (or add column later)
            "duration" => "3:00", // Placeholder (or add column later)
            "likes" => rand(100, 1000), // For demo
            "downloads" => rand(50, 300), // For demo
            "views" => rand(500, 5000), // For demo
            "tags" => ["video", "ai", "gallery"] // Static tags
        ];
    }
}

echo json_encode($videos);
$conn->close();
?>
