//2. Agregar overlay Ligthbox

//$=significa que estamos codificando en jquery
//el dom es una estructura del html 
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
//append funciona con junto con la variable va concatenando variable por variable
$overlay.append($image);

//2.2 un texto
$overlay.append($caption);

//agregar el overlay al body
$("body").append($overlay);
//(function(event) quiere decir q esto se cumpla osea el click

$("#galeria li a").click(function(event)
{
	//preventdefault impedir q se ejecute el evento por defecto osea despues de click no haga nada
	event.preventDefault();
	//.attr estraeme algo de este elemento href extrame la descripcion de una etiqueta html
	var href=$(this).attr("href");

	//1.1 Mostrar el light box con la imagen a la que se dio click
	$image.attr("src",href);

	var texto = $(this).children("img").attr("alt");
	$caption.text(texto);

	//muestra lo que hay dentro de la variable overlay
	$overlay.show();
	//para imprimir por consola imprime el href osea el vinculo
	console.log(href);
});

//esta linea es obligatoria, 
$overlay.click(function()
{
	$overlay.hide();
});
//ARRAY ES UN CONTENEDOR Q VA A  TENER UN INDEX POR ESA RAZON SIEMPRE ESTARA EL INDEX.OFF 
//crear elemento select
var $select = $("<select></select>");
//# significa el selector
$("#menu").append($select);

//recorrer el menu con la funcion each
//para q sirve el eachpara modificar todos los elementos q tiene el menu
$("#menu a").each(function()
{
	var $anchor = $(this);
	//crear una opcion para el select por cada elemento
	var $option=$("<option></option>");
	//obtener cada valor de la opcion del atributo href
	$option.val($anchor.attr("href"));
	//obtener el texto de cada opcion
	$option.text($anchor.text());
	//agregar option al select
	$select.append($option);

	//el hasclass sirve para obtener si el link en la pagina actual (tiene clase selected)
	
	if($(this).hasClass("selected"))
	{
		
		$option.prop("selected",true);
	}

});

/*var $button = $("<button>Go</button>");
$("#menu").append($button);

$button.click(function()
{
	//toma el valor de la opcion selecionada
	window.location=$select.val();
});*/

$select.change(function()
	{
		//que el jquery no se ejecute hasta que cargue completamente la ventana
		window.location=$select.val();
	});