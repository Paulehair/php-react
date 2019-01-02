<?php
require_once "conn.php";

$sql = "SELECT
      `id`,
      `title`,
      `firstChoice`,
      `firstIndex`,
      `secondChoice`,
      `secondIndex`,
      `thirdChoice`,
      `thirdIndex`,
      `slug`
        FROM 
          `transition` 
        ";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$rows = array();
while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $rows[] = $row;
}
echo json_encode($rows);