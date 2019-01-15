<?php
require_once "conn.php";

$sql = "SELECT
      `id`,
      `title`,
      `quotation`,
      `spanQuotation`,
      `quotationMore`,
      `colorQuotation`,
      `sourceQuotation`,
      `mainText`,
      `mainText2`,
      `firstSubtitle`,
      `firstContent`,
      `secondSubtitle`,
      `secondContent`,
      `secondContentMore`,
      `question`,
      `firstChoice`,
      `firstIndex`,
      `secondChoice`,
      `secondIndex`,
      `slug`
        FROM 
          `global_part` 
        ";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$rows = array();
while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $rows[] = $row;
}
echo json_encode($rows);