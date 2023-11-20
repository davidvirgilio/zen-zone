import Image from "next/image"
import Link from "next/link"

function Face({emotion, width, height}:{emotion: string, width: number, height: number}){
    return(
      <button  className='button-face mx-auto w-full'>
        <Image
          src={`/graphics/face-${emotion}.svg`}
          alt={emotion}
          width={width}
          height={height}
          priority
          className={`w-full relative ${emotion}`}
           />
      </button>
    )
  }


function Emotions(){
    return(
          <div className="flex grid grid-cols-3 grid-rows-3 items-center max-w-screen-md p-8 m-auto gap-4">
            <Face emotion={'anticipation'} width={201} height={205} />
            <Face emotion={'joy'} width={183} height={183} />
            <Face emotion={'trust'} width={174.39} height={186.44} />
            <Face emotion={'anger'} width={185} height={201} />
            <h1 className="text-center uppercase">How are you feeling today?</h1>
            <Face emotion={'fear'} width={179} height={179} />
            <Face emotion={'disgust'} width={189.10} height={195.28} />
            <Face emotion={'sadness'} width={187} height={191} />
            <Face emotion={'surprise'} width={197} height={198} />
          </div>
    )
  }
//   function SelectedEmotion(){
//     return(
//       <section className="bg-slate-200 p-8">
//           <h2>Selected emotion or feeling:</h2>
//           <div className="flex flex-wrap gap-8 mb-8">
//             <Face />
//             <p className="max-w-md">Short description of the feeling. Lorem ipsum dolor sit amet consectetur. 
//       Sed auctor augue nam faucibus proin. Massa vitae tristique sit at lobortis erat. Ac et euismod neque suspendisse vel elit iaculis id. Imperdiet orci mattis nibh convallis vulputate dictumst facilisis.</p>
//           </div>
//           <Link href={"#"}>Explore more</Link>
//           </section>
//     )
//   }

  export function EmotionsWheel(){
    return (
        <Emotions />
    )
  }