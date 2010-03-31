[<?php
if ($handle = opendir('.')) {
    while (false !== ($file = readdir($handle))) {
        if ($file != "." && $file != ".." && $file != "ImageCarousel.php") {
            echo "'$file',";
        }
    }
    closedir($handle);
}
?>]