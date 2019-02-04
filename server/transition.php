<?php
require_once "conn.php";

$sql = "SELECT
      `id`,
      `title`,
      `text1`,
      `first_choice`,
      `first_index`,
      `second_choice`,
      `second_index`,
      `third_choice`,
      `third_index`,
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