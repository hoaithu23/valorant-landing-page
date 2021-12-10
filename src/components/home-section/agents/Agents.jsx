import './agents.scss'

import HomeSection from '../HomeSection'
import AgentsCard from './AgentsCard'

import { bg2 } from '../../../assets/images'
import { agentsData } from '../../../assets/dummy'

import { Swiper, SwiperSlide } from 'swiper/react'

const Agents = props => {
    return (
        <HomeSection
            className={`agents ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg2}
        >
            <div className="container relative">
                <div className="agents-list">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={0}
                        grabCursor={true}
                        nested={true}
                    >
                        {
                            agentsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <AgentsCard item={item} id={index}/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </HomeSection>
    )
}

export default Agents
