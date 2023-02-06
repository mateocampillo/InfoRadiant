import React, {useState, useEffect} from 'react';

function PlayerTitles() {

    const [cargando, setCargando] = useState(true);
    const [lista, setLista] = useState(null);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/playertitles?language=es-MX")
            .then((res) => res.json())
            .then((data) => {
                let objetosFiltrados = [];
                let datosUtiles = data.data;
                datosUtiles.forEach(item => {
                    objetosFiltrados.push({
                        uuid: item.uuid,
                        titulo: item.titleText
                    })
                });
                let listItems = objetosFiltrados.map((item) => 
                <li key={item.uuid}>titulo: {item.titulo}</li>
                );
                setLista(listItems);
                setCargando(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if(cargando) {
        return (
            <div>
                <h1>Cargando</h1>
            </div>
        )
    }

    return (
        <div>
            <ul>
                {lista}
            </ul>
        </div>
    )
}

export default PlayerTitles;