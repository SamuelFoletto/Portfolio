<?php
include('conexao.php');
?>

<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de classificação</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
</head>


<body>
    <header>
        <div id="logo_header">
            <img src="rp.svg" class="logo1">
            <img src="romper.svg" class="logo2">
        </div>
    </header>   
    <main>
    <form method="GET">
        <input name="busca" type="text" placeholder="Digite o ramo de atuação" >
        <button type="submit">Pesquisar</button>
    </form>
    <br>

    <table width="1000px" border="1" >
        <tr>
            <th>Tipo da Classe</th>
            <th>NCL</th>
            <th>Descrição</th>
        </tr>

        <?php
            if(!isset($_GET['busca'])){

        ?>      
        <tr>
            <td colspan="3">Digite algo para pesquisar</td>
        </tr>


        <?php 
        } else{
        
        $pesquisa = $mysqli->real_escape_string ($_GET['busca']);
        $sql_code = "SELECT * FROM classes where numb_class LIKE '%$pesquisa%' or desc_class like'%$pesquisa%' order by numb_class asc";
        $sql_query = $mysqli->query($sql_code) or die($mysqli->error);

        if ($sql_query->num_rows == 0) {
        ?>
        <tr>
            <td colspan="3">Nenhum resultado encontrado</td>
        </tr>
        <?php
        } else{
            while($dados = $sql_query->fetch_assoc()){
            ?>
            <tr>
                <td><?php echo $dados['tipo_class'];?></td>
                <td><?php echo $dados['numb_class'];?></td>
                <td><?php echo $dados['desc_class'];?></td>
            </tr>
        <?php
            }
        }
        ?>
        <?php 
    } ?>

    </table>
</main>
</body>
</html>