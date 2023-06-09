import { useState } from "react";
import Image from "next/image";

export default function Spells(){

    //itens
    const [classeVS, setClasseVS] = useState('item');

    //lets
    let [numvs, setNumvs] = useState(1);
 
    //funções
    const changeVS = () =>{
        setNumvs(numvs *= -1);

        if(numvs === 1) setClasseVS("item");
        if (numvs === -1) setClasseVS("");
    }

    return(
        <>
            <div className="container">
                <Image className={classeVS} src='/../public/Vengeful_Spirit_Icon.webp' width="230" height="144" onClick={changeVS} alt="Fire Ball"/>
            </div>
        </>
    );
}