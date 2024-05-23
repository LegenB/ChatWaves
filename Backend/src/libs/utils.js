



export function formatoFecha(fecha, formato) {

    // Verificar si fecha es una instancia de Date, si no, intentar convertirla
    if (!(fecha instanceof Date)) {
        fecha = new Date(fecha);
    }

    if (isNaN(fecha.getTime())) {
        throw new Error("Fecha no válida");
    }

    console.log(fecha);
    console.log(formato);
    console.log('***********************');

    // Obtener y formatear el día, mes, año, horas, minutos y segundos
    let dia = fecha.getDate().toString().padStart(2, '0');
    let mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    let anio = fecha.getFullYear().toString();
    let anioCorto = anio.substring(2);
    let horas = fecha.getHours().toString().padStart(2, '0');
    let minutos = fecha.getMinutes().toString().padStart(2, '0');
    let segundos = fecha.getSeconds().toString().padStart(2, '0');

    // Reemplazar 'dd', 'mm', 'yyyy', 'yy', 'hh', 'MM', 'ss' en el formato
    formato = formato.replace('dd', dia);
    formato = formato.replace('mm', mes);
    formato = formato.replace('yyyy', anio);
    formato = formato.replace('yy', anioCorto);
    formato = formato.replace('hh', horas);
    formato = formato.replace('MM', minutos);
    formato = formato.replace('ss', segundos);

    console.log(formato);

    return formato;
  
}
