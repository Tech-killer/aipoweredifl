<?php
// Fallback to index.html
if (file_exists(__DIR__ . "/index.html")) {
    header("Content-Type: text/html");
    readfile(__DIR__ . "/index.html");
    exit;
}
http_response_code(404);
echo "index.html not found";
