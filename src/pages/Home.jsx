import {
    Swiper, 
    SwiperSlide
} from 'swiper/react'

import SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination
} from 'swiper'

import {
    Agents,
    Welcome,
    AgentsDetail,
    Trailer,
    Credit
} from '../components/home-section'

import { agentsData } from '../assets/dummy'

SwiperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: 'fade',
    speed: 1000
}

const Home = () => {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    {({ isActive }) => <Welcome isActive={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Agents isActive={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Trailer isActive={isActive}/>}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Credit isActive={isActive}/>}
                </SwiperSlide>
            </Swiper>
            {
                agentsData.map((item, index) => <AgentsDetail
                    key={index}
                    item={item}
                    id={index}
                />)
            }
            <div className="scroll">
                <span>Scroll to see effect</span>
            </div>
        </>
    )
}

export default Home
