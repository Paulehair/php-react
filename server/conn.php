<?php
header("Access-Control-Allow-Origin: *");
try {
    $pdo = new PDO('mysql:host=localhost;dbname=php-react-test;port=3306', 'root','root');
} catch (PDOException $exception) {
    die($exception->getMessage());
}
$pdo->exec('SET NAMES UTF8');