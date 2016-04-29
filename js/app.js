//2. Agregar overlay Ligthbox
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
$overlay.append($image);

//2.2 un texto
$overlay.append($caption);

//agregar el overlay al body
$("body").append($overlay);


$("#galeria li a").click(function(event)
{
	event.preventDefault();
	var href=$(this).attr("href");

	//1.1 Mostrar el light box con la imagen a la que se dio click
	$image.attr("src",href);

	var texto = $(this).children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
	console.log(href);
});


$overlay.click(function()
{
	$overlay.hide();
});

//crear elemento select
var $select = $("<select></select>");
$("#menu").append($select);

//recorrer el menu con la funcion each
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

	//obtener si el link en la pagina actual (tiene clase selected)
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
		window.location=$select.val();
	});