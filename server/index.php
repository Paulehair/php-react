<?php
require_once "conn.php";

$sql = "SELECT
      `id`,
      `title`, 
      `title_span`, 
      `subtitle`, 
      `text1`, 
      `img`, 
      `video`, 
      `text2`, 
      `text3`, 
      `text4`, 
      `text5`, 
      `text6`,  
      `source`, 
      `first_choice`,
      `first_index`, 
      `second_choice`,
      `second_index`,
      `slug`
        FROM 
          `article` 
        ";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$rows = array();
while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $rows[] = $row;
}
echo json_encode($rows);