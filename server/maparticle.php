<?php
require_once "conn.php";

$sql = "SELECT
      `id`,
      `img_country`,
      `title`, 
<<<<<<< HEAD
      `subtitle`,
=======
      `subtitle`, 
>>>>>>> 841e53f151c1d75adc53e5823b956852499c57f3
      `img`,
      `video`,
      `text1`,
      `text2`,
      `text3`,
      `source`
<<<<<<< HEAD
      FROM 
        `map_article` 
      ";
=======
        FROM 
          `map_article` 
        ";
>>>>>>> 841e53f151c1d75adc53e5823b956852499c57f3
$stmt = $pdo->prepare($sql);
$stmt->execute();
$rows = array();
while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $rows[] = $row;
}
echo json_encode($rows);