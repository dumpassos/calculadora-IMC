import { Level } from "@/helpers/imc";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";
import Image from "next/image";

type Props = {
    item: Level
}

export const GridItem = ({item}: Props)=>{

    return (
        <div style={{backgroundColor: item.color}} 
            className="flex-1 rounded-xl text-white flex 
            justify-center items-center flex-col p-5"
        > {/* Div principal */}

            <div className="w-16 h-16 rounded-full bg-opacity-10
             bg-black flex justify-center items-center"> 

            <Image src={item.icon === 'up' ? upImage : downImage} alt="" width='30'/>
            </div> {/* Div Ícone */}

            <div className="text-2xl font-semibold  mt-1"> 
                {item.title}
            </div>  {/* Div Título */}

            {item.yourImc && 
                <div className="text-base mt-3 ml-0 mb-12 mr-0">Seu IMC é de <strong>{item.yourImc}</strong>kg/m²</div>
            }

            <div className="text-sm mt-4"> 
                <>
                IMC entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div> {/* Div Informações */}

        </div>
    )
}