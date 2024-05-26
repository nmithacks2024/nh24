import Slider from 'react-infinite-logo-slider'
import { mentors } from './index.js'
const Mentors2 = () => {

    return (
        <section className="bg-[#101010] text-white py-5">
            <h2 className="text-center text-2xl mb-2 font-bold leading-8">Mentors</h2>
            <div className="logos group relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
                <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                    {mentors.map((mentor, i) => {
                        return <a href={mentor.linkedin}><img className="mx-4 inline h-56 lg:h-48 md:h-44 sm:h-40 xxs:h-36 rounded-xl" src={mentor.src} alt="" /></a>
                    })}
                </div>
                <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                    {mentors.map((mentor, i) => {
                        return <a href={mentor.linkedin}><img className="mx-4 inline h-56 lg:h-48 md:h-44 sm:h-40 xxs:h-36 rounded-xl" src={mentor.src} alt="" /></a>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Mentors2