"use client"
import Image from "next/image";
import imcImg from "../assets/powered.png" ;
import leftArrow from "../assets/leftarrow.png"
import { useState } from "react";
import {levels, calculateImc, Level} from '../helpers/imc'; 
import { GridItem } from "@/components/GridItem/GridItem";

 

const Page = ()=>{

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = ()=>{

    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField))
    } 

    else{
      alert("Preencha os dois campos!")
    }
  }

  const handleBackButton = ()=>{
    setToShow(null);
    setHeightField(0);
    setWeightField(0);

  }

  return (
    <div className="box-border pb-12 h-screen w-screen">
      <header className="md:py-0 md:px-5">
        <div className="max-w-4xl my-10 mx-auto">
          <Image src={imcImg} alt="" width='60' />
        </div>
      </header>
      <div className="flex max-w-4xl m-auto
                      md:py-0 md:px-5 md:flex-col">
        <div className="flex-1  mr-10
                        md:mr-0"
          > {/* Lefttside */}
        <h1 className="text-4xl font-bold m-0 mb-3 text-zinc-700">Calcule o seu IMC.</h1>
        <p className="text-xl mb-10 text-zinc-500">O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>

        <input 
        type="number" 
        placeholder="Digite a sua altura em metros. Ex: 1.70"
        className="w-full  border-b-2 border-gray-500 py-3 px-1 mb-5 text-base outline-none bg-transparent disabled:opacity-50"
        value={heightField > 0 ? heightField : ''}
        onChange={e => setHeightField(parseFloat(e.target.value))}
        disabled={toShow? true : false}
        />
        <input 
        type="number" 
        placeholder="Digite o seu peso em quilos. Ex: 75.50"
        className="w-full border-b-2 border-gray-500 py-3 px-1 mb-5 text-base outline-none bg-transparent disabled:opacity-50"
        value={weightField > 0 ? weightField : ''}
        onChange={e => setWeightField(parseFloat(e.target.value))}
        disabled={toShow? true : false}
        />

        <button 
        onClick={handleCalculateButton}
        className="bg-blue-600 font-bold text-white text-base border-none rounded-3xl 
        py-4 px-0 w-full cursor-pointer mt-10 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-default"
        disabled={toShow? true : false}
        >Calcular</button>
        
        </div>

        <div className="flex-1 b ml-10 flex
                          md:ml-0 md:mt-12"
        > {/* Rightside */}

        {!toShow && 
        <div className="grid grid-cols-2 gap-5 flex-1
                        sm:grid-cols-1">
          {levels.map((item, key)=>(
            <GridItem key={key} item={item}/>
          ))}
        </div>
        }

        {toShow && 
        <div className="flex-1 flex "> {/* RightBig */}

          <div className="absolute bg-blue-500 w-16 h-16 rounded-full 
                          flex justify-center items-center cursor-pointer
                          -ml-8 mt-44 bg-opacity-90 hover:opacity-75
                          md:ml-0 md:mt-0 md:rounded-xl"
                onClick={handleBackButton}
                >
            <Image src={leftArrow} alt="" width='25'/>
          </div> {/* RightArrow - setinha de voltar */}

          <GridItem item={toShow}/>
        </div>
        }
        </div>
      </div>
    </div>
  )
}

export default Page;
