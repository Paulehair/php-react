<?php
require_once "conn.php";

$sql = "SELECT
      `id`,
      `title`,
      `first_choice`,
      `first_index`,
      `slug`
        FROM 
          `map` 
        ";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$rows = array();
while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $rows[] = $row;
}
echo json_encode($rows);