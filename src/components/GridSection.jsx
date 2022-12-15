import Typeform from './Typeform'

import wink from '../assets/wink.png'
import space21 from '../assets/Space22.png'
import sumedha from '../assets/sumedha.png'
import twitter from '../assets/twitter.png'
import tech1 from '../assets/tech1.png'
import tech2 from '../assets/tech2.png'
import kanban from '../assets/kanban.png'
import portfolio from '../assets/portfolio.png'
import freelance from '../assets/freelance.png'

function GridSection() {
    return (
        <div className="px-8 md:px-14 pt-28 pb-20 max-w-7xl m-auto text-white">
            <div className="grid-container">
                <div className="grid-card group col-span-2">
                    <div className="max-w-[120px] pb-6">
                        <img src={wink} />
                    </div>
                    <div>
                        <h1 className="text-4xl mb-4">Hey, I'm Ayush 👋🏻</h1>
                        <div className="flex justify-between">
                            <h2 className="text-gray-300 text-xl">A Web developer and Notioner</h2>
                            <svg className="arrow hidden" width="479" height="479" viewBox="0 0 479 479" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M350.24 252.16C357.563 244.931 357.537 233.207 350.136 225.941L262.053 139.441C247.971 125.384 226.856 146.457 240.939 160.515L299.802 219.203C302.698 222.093 301.683 224.432 297.573 224.432H135.173C126.902 224.432 120.2 231.052 120.2 239.339C120.2 247.568 126.887 254.24 135.173 254.24H297.573C301.698 254.24 302.688 256.594 299.802 259.474L240.939 318.162C226.856 332.209 247.97 353.293 262.053 339.236L350.24 252.16Z" fill="black" />
                                <path d="M239.667 463.333C115.952 463.333 15.6667 363.049 15.6667 239.333C15.6667 115.618 115.952 15.3334 239.667 15.3334C363.382 15.3334 463.667 115.618 463.667 239.333C463.667 363.049 363.382 463.333 239.667 463.333Z" stroke="black" strokeWidth="29.8667" />
                            </svg>
                        </div>
                    </div>
                </div>
                <a href='https://drive.google.com/file/d/12sAqtcigRGFRmw31tdFWUqaWR1687NJ3/view?usp=sharing' target='_blank' className="group grid-card">
                    <p className="text-6xl pb-6">📄</p>
                    <div>
                        <p className='text-gray-400 uppercase text-sm'>Learn more about me</p>
                        <div className='flex justify-between mt-2'>
                            <h2 className='text-3xl'>See my<br />resume</h2>
                            <svg className="arrow -rotate-45" width="479" height="479" viewBox="0 0 479 479" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M350.24 252.16C357.563 244.931 357.537 233.207 350.136 225.941L262.053 139.441C247.971 125.384 226.856 146.457 240.939 160.515L299.802 219.203C302.698 222.093 301.683 224.432 297.573 224.432H135.173C126.902 224.432 120.2 231.052 120.2 239.339C120.2 247.568 126.887 254.24 135.173 254.24H297.573C301.698 254.24 302.688 256.594 299.802 259.474L240.939 318.162C226.856 332.209 247.97 353.293 262.053 339.236L350.24 252.16Z" fill="black" />
                                <path d="M239.667 463.333C115.952 463.333 15.6667 363.049 15.6667 239.333C15.6667 115.618 115.952 15.3334 239.667 15.3334C363.382 15.3334 463.667 115.618 463.667 239.333C463.667 363.049 363.382 463.333 239.667 463.333Z" stroke="black" strokeWidth="29.8667" />
                            </svg>
                        </div>
                    </div>
                </a>
                <a href='http://twitter.com/ayush_dhingra_' target='_blank' className="group grid-card">
                    <div className="max-w-[100px] pb-6">
                        <img src={twitter} />
                    </div>
                    <div>
                        <div className='flex justify-between mt-2'>
                            <h2 className='text-3xl'>Connect<br />on Twitter</h2>
                            <svg className="arrow -rotate-45" width="479" height="479" viewBox="0 0 479 479" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M350.24 252.16C357.563 244.931 357.537 233.207 350.136 225.941L262.053 139.441C247.971 125.384 226.856 146.457 240.939 160.515L299.802 219.203C302.698 222.093 301.683 224.432 297.573 224.432H135.173C126.902 224.432 120.2 231.052 120.2 239.339C120.2 247.568 126.887 254.24 135.173 254.24H297.573C301.698 254.24 302.688 256.594 299.802 259.474L240.939 318.162C226.856 332.209 247.97 353.293 262.053 339.236L350.24 252.16Z" fill="black" />
                                <path d="M239.667 463.333C115.952 463.333 15.6667 363.049 15.6667 239.333C15.6667 115.618 115.952 15.3334 239.667 15.3334C363.382 15.3334 463.667 115.618 463.667 239.333C463.667 363.049 363.382 463.333 239.667 463.333Z" stroke="black" strokeWidth="29.8667" />
                            </svg>
                        </div>
                    </div>
                </a>
                <div className="grid-card">
                    <div>
                        <img src={portfolio} className='rounded-2xl py-2 m-auto' />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium'>Personal/Portfolio Site</h3>
                        <p className='text-gray-300'>My new personal site, made using React and Tailwind. (You're here)</p>
                    </div>
                </div>
                <a href='https://github.com/adayush/SIH-child' target='_blank' className="grid-card">
                    <div>
                        <img src={sumedha} className="m-auto object-cover object-top" />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium'>Sumedha - SIH'22</h3>
                        <p className='text-gray-300'>A PWA app to guide holistic development in children along with AI-guided Yoga.</p>
                    </div>
                </a>
                <a href='https://github.com/adayush/Space21-WebApp' target='_blank' className="grid-card overflow-hidden">
                    <div>
                        <img src={space21} className="m-auto object-cover object-top" />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium'>Membership Management App</h3>
                        <p className='text-gray-300'>A PWA app handling member management, built for a local business.</p>
                    </div>
                </a>
                <a href='https://github.com/adayush/react-kanban' target='_blank' className="grid-card">
                    <div>
                        <img src={kanban} className='rounded-md m-auto' />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium'>Kanban Board</h3>
                        <p className='text-gray-300'>A Kanban board inspired from Notion's UI. Build using React.js, React-beautiful-dnd.</p>
                    </div>
                </a>
                <div className="grid-card">
                    <div>
                        <img src={freelance} className='m-auto mb-2' />
                    </div>
                    <div>
                        <h2 className='text-2xl font-medium'>Freelancing</h2>
                    </div>
                </div>
                <Typeform>
                <div className="grid-card">
                    <div>
                        <p className='font-bold uppercase text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Let's have a chat!</p>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <h2 className='text-3xl'>Contact me</h2>
                        <svg className="arrow -rotate-45" width="479" height="479" viewBox="0 0 479 479" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M350.24 252.16C357.563 244.931 357.537 233.207 350.136 225.941L262.053 139.441C247.971 125.384 226.856 146.457 240.939 160.515L299.802 219.203C302.698 222.093 301.683 224.432 297.573 224.432H135.173C126.902 224.432 120.2 231.052 120.2 239.339C120.2 247.568 126.887 254.24 135.173 254.24H297.573C301.698 254.24 302.688 256.594 299.802 259.474L240.939 318.162C226.856 332.209 247.97 353.293 262.053 339.236L350.24 252.16Z" fill="black" />
                            <path d="M239.667 463.333C115.952 463.333 15.6667 363.049 15.6667 239.333C15.6667 115.618 115.952 15.3334 239.667 15.3334C363.382 15.3334 463.667 115.618 463.667 239.333C463.667 363.049 363.382 463.333 239.667 463.333Z" stroke="black" strokeWidth="29.8667" />
                        </svg>
                    </div>
                </div>
                </Typeform>
                <div className="grid-card col-span-2">
                    <div className='flex overflow-clip flex-col sm:flex-row items-center'>
                        <img src={tech1} className='max-w-[244px] max-h-[150px]' />
                        <img src={tech2} className='max-w-[300px] max-h-[150px]' />
                    </div>
                    <div>
                        <div className='flex justify-between mt-2'>
                            <h2 className='text-2xl font-medium'>Tech Stack</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridSection;