import Image from 'next/image'
import { useState } from 'react'

export default function Dreamers(){
  
    //itens
    const [classe1, setClasse1] = useState('item');
    const [classe2, setClasse2] = useState('item');
    const [classe3, setClasse3] = useState('item');
    
    //lets
    let [num, setNum] = useState(1);
    let [num2, setNum2] = useState(1);
    let [num3, setNum3] = useState(1);

    //funções
    const change1 = () =>{

        setNum(num *= -1);

        if(num === 1) setClasse1("item");
        if (num === -1) setClasse1("");
    }

    const change2 = () =>{

        setNum2(num2 *= -1);

        if(num2 === 1) setClasse2("item");
        if (num2 === -1) setClasse2("");
    }

    const change3 = () =>{

        setNum3(num3 *= -1);

        if(num3 === 1) setClasse3("item");
        if (num3 === -1) setClasse3("");
    }

    return (
        <>
            <div className='container'>
                <Image className={classe1} src="/../public/manamon.png" alt="Monomon" width="166" height="305" onClick={change1}/>
                <Image className={classe2} src="/../public/luriam.png" alt="Lurien" width="177" height="242" onClick={change2}/>
                <Image className={classe3} src="/../public/herah.png" alt="Herah" width="148" height="245" onClick={change3}/>
            </div>
        </>
    )
}