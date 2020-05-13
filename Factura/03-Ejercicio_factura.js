let InputNombre = document.getElementById("InputNombre");
let InputFecha = document.getElementById("InputFecha");
let InputRuc = document.getElementById("InputRuc");
let InputNumero = document.getElementById("InputNumero");
let CuerpoTabla = document.getElementById("CuerpoTabla");
let InputDescripcion = document.getElementById("InputDescripcion");
let InputCantidad = document.getElementById("InputCantidad");
let InputPrecioUnitario = document.getElementById("InputPrecioUnitario");
let InputTotal = document.getElementById("InputTotal");
let BtnAgregar = document.getElementById("BtnAgregar");
// let Importe = document.getElementById("Importe");
let FooterTabla = document.getElementById("FooterTabla");
// Creamos la ultima fila
let FilaFinal = document.createElement("tr");
let TdTotal = document.createElement("td");
TdTotal.colSpan = "3";
TdTotal.innerText = "Total";
let TdImporteTotal = document.createElement("td");
TdImporteTotal.setAttribute("id", "MontoTotal")
let FormFactura = document.getElementById("FormFactura");
let Detalle = [];
let Factura = []
let SumaTotal;
InputPrecioUnitario.onkeyup = (e) => {
    console.log(e.key);

    let Precio = InputPrecioUnitario.value;
    let Cantidad = InputCantidad.value;
    InputTotal.value = Precio * Cantidad;
    // console.log(InputTotal.value);

}


const InsertarDetalle = () => {
    CuerpoTabla.innerText = "";
    let SumaTotal = 0;
    Detalle.forEach(t => {

        let Fila = document.createElement("tr");

        //     // Creando la columna NRO
        let TdCantidad = document.createElement("td");
        TdCantidad.innerText = t.Cant;
        let TdDesripcion = document.createElement("td");
        TdDesripcion.innerText = t.Desc;
        let TdPrecioUnitario = document.createElement("td");
        TdPrecioUnitario.innerText = t.Prec;
        let TdTotal = document.createElement("td");
        TdTotal.innerText = t.Tot;

        SumaTotal = SumaTotal + parseFloat(t.Tot);
        // Importe.innerText = ImporteTotal;



        // 

        Fila.appendChild(TdCantidad);
        Fila.appendChild(TdDesripcion);
        Fila.appendChild(TdPrecioUnitario);
        Fila.appendChild(TdTotal);
        CuerpoTabla.appendChild(Fila);


    })
    
    TdImporteTotal.innerText = SumaTotal;
    FilaFinal.appendChild(TdTotal);
    FilaFinal.appendChild(TdImporteTotal);
    FooterTabla.appendChild(FilaFinal);

    // elemento.focus()=>forza al cursor a enfocarse o ubicarse en un elemento
    // en este casoen el input
    InputCantidad.focus();
}




BtnAgregar.onclick = () => {
    let ObjDetalle = {
        Cant: InputCantidad.value,
        Desc: InputDescripcion.value,
        Prec: InputPrecioUnitario.value,
        Tot: InputTotal.value

    }
    Detalle.push(ObjDetalle);
    // console.log(Detalle);

    InputCantidad.value = "";
    InputDescripcion.value = "";
    InputPrecioUnitario.value = "";
    InputTotal.value = "";
    InsertarDetalle();
}

FormFactura.onsubmit = (e) => {
    e.preventDefault();
// let ImporteFinal=document.getElementById("MontoTotal");
    let ObjFactura = {
        Cliente: InputNombre.value,
        Fecha: InputFecha.value,
        Ruc: InputRuc.value,
        Numero: InputNumero.value,
        Importe: RetornarTotal(),
        Detalle
    }

    console.log(Factura);
    Factura.push(ObjFactura);
    let FacturaString = JSON.stringify(Factura);
    localStorage.setItem("Factura", FacturaString);


    //  console.log(NoMbre);

}



const RetornarTotal = () => {
      let SumTotal = 0;
    Detalle.forEach(t => {

        SumTotal = SumTotal + parseFloat(t.Tot);
      


    })
 
    
    return SumTotal;
}