import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
    return (
        <div className="py-6 px-10 text-white">
            <div className="pb-8 flex justify-center align-top gap-8">
                <a href='https://github.com/adayush' target='_blank'><img className='w-6 h-fit invert' src={github} /></a>
                <a href='https://linkedin.com/in/ayush-dhingra/' target='_blank'><img className='w-6 h-fit grayscale hover:grayscale-0 transition-all' src={linkedin} /></a>
                <a href='https://twitter.com/ayush_dhingra_' target='_blank'><img className='w-7 h-fit grayscale hover:grayscale-0 transition-all' src={twitter} /></a>
                <a href='https://instagram.com/ayush.dhingra/' target='_blank'><img className='w-6 h-fit grayscale hover:grayscale-0 transition-all' src={instagram} /></a>
            </div>
            <p className='text-center text-slate-300'>Made using React + Tailwind &nbsp;&nbsp; | &nbsp;&nbsp; Inspired by <a className='font-bold' target='_blank' href='https://gridfolio.framer.website/'>Gridfolio.</a></p>
        </div>    
    );
}

export default Footer;