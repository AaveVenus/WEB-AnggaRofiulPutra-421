<?php
include "Controller/ProductController.php";

use Controller\ProductController;

//deklarasi object kelas
$productController = new ProductController;

echo $productController->getAllProduct();