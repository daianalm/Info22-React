function Noticia() {
    const noticia ={
        titulo: 'Noticia',
        descripcion: 'Esta es una descripción de la noticia'
    }
    const {titulo, descripcion} = noticia;
    return (
        <div className="mi-clase">
            <h1 className="mi-titulo">{titulo}</h1>
            <h2 className="mi-descripcion">{descripcion}</h2>
        </div>
    )
}
export default Noticia;