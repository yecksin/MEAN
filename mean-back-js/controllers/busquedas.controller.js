const getBusqueda = async (req, res = response) => {
   
    try {
        res.json({
            ok: true,
            palabra:req.params.id
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: true,
            message:'getBusqueda Error ines'
        })
    }

}

module.exports = {
    getBusqueda
}