alert("Hello");
  var checked_class = 'checked';    
  // Initialize DataTable
  if ($(".tableclientes").length) {
      oTable = $('#table-1').dataTable({
          "language": {
              "url": "//cdn.datatables.net/plug-ins/1.10.13/i18n/Spanish.json",
              searchPlaceholder: "Buscar"
          },
          "stateSave": true,
          "columnDefs": [{
              "targets": [0],
              "visible": false
          }],
          "bLengthChange": false,
      });
      // Initalize Select Dropdown after DataTables is created
      jQuery('#table-1').closest('.dataTables_wrapper').find('select').select2({
          minimumResultsForSearch: -1
      });
  }
// 		// Ahora, vamor a obtener cinco actores aleatorios y a imprimir sus nombres en una lista.
// // El manejo de errores va a ser menor aquí, aunque ya sabemos como hacerlo
// $sql = "SELECT actor_id, first_name, last_name FROM actor ORDER BY rand() LIMIT 5";
// if (!$resultado = $mysqli->query($sql)) {
//     echo "Lo sentimos, este sitio web está experimentando problemas.";
//     exit;
// }

// // Imprimir nuestros cinco actores aleatorios en una lista, y enlazar cada uno
// echo "<ul>\n";
// while ($actor = $resultado->fetch_assoc()) {
//     echo "<li><a href='" . $_SERVER['SCRIPT_FILENAME'] . "?aid=" . $actor['actor_id'] . "'>\n";
//     echo $actor['first_name'] . ' ' . $actor['last_name'];
//     echo "</a></li>\n";
// }
// echo "</ul>\n";
