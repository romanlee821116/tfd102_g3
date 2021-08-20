<?php

    include('./connection.php');

    $search = $_POST["search"];

    $sql = "SELECT * FROM news where news_id like ?";
    
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, "%".$search."%");
    $statement->execute();
    
    $data = $statement->fetchAll(); 
    echo json_encode($data);  
?>