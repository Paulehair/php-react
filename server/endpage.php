<?php
require_once "conn.php";

$sql = "SELECT
      `id`,
      `title`,
      `title_span`,
      `text1`,
      `text2`,
      `text3`,
      `source`,
      `question`,
      `first_choice`,
      `first_index`,
      `second_choice`,
      `second_index`
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