<?php
require_once "conn.php";

$sql = "SELECT
      `id`,
      `title`,
      `spanTitle`,
      `text`,
      `moreText`,
      `reference`,
      `question`,
      `firstChoice`,
      `firstIndex`,
      `secondChoice`,
      `secondIndex`
        FROM 
          `end_point` 
        ";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$rows = array();
while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $rows[] = $row;
}
echo json_encode($rows);