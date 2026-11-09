import { useEffect, useState } from "react";
import type { RajzfilmAdat } from "./types";

function RajzfilmLista() {
    const [rajzfilmek, setRajzfilmek] = useState<RajzfilmAdat[]>([]);

useEffect(() => {
    async function betolt() {
        const valasz = await fetch("/rajzfilmek.json");
        const adatok: RajzfilmAdat[] = await valasz.json(); 
        setRajzfilmek(adatok); 
    }

    betolt();
}, []);

const evek = rajzfilmek.map((r) => r.megjelenesEve);

const legkorabbi = Math.min(...evek);
const legkesobbi = Math.max(...evek);

return (
    <div>
        <h1>Rajzfilmek</h1>
        <p>{rajzfilmek.length} rajzfilm található.</p>
        <p>A legkorábbi rajzfilm {legkorabbi}-ben jelent meg.</p>
        <p>A legkésőbbi rajzfilm {legkesobbi}-ben jelent meg.</p>
    </div>
);
}

export default RajzfilmLista;