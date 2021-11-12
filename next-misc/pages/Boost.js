import Image from 'next/image'
import img from '../public/3.jpeg'

function BoostPics(){
    return(
        <div>
            <Image src={img} alt='boost' placeholder='blur' blurDataURL='' width='300' height='300'/>
            {
                ['1','2','3','4','5'].map(path=>{
                    return(
                        <div key={path}>
                            {/* <img src={`/${path}.jpeg`} alt='boost' width='420' height='500'/> */} 
                            <Image src={`/${path}.jpeg`} alt='boost' width='420' height='500'/>
                         </div>
                    )    
                })
            }
        </div>
    )
}
export default BoostPics