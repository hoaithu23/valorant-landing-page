import './agents-detail.scss'

import { closeIcon } from '../../../assets/images'
import { useRef, useEffect } from 'react'

const AgentsDetail = props => {

    const item = props.item
    const iframeRef = useRef(null)

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    }, [])

    const onClose = () => {
        document.querySelector(`#agents-detail-${props.id}`).classList.remove('active')
        iframeRef.current.setAttribute('src', '')

        const img = document.querySelector(`#agents-img-${props.id}`)
        img.style.opacity = 0
        setTimeout(() => {
            img.remove()
        }, 500);
    }

    return (
        <div
            id={`agents-detail-${props.id}`}
            className={`agents-detail bg-image overlay ${props.active ? 'active' : ''}`}
            style={{backgroundImage: `url(${item.bgLarge})`}}
        >
            <div className="agents-detail__content">
                <span>{item.role}</span>
                <h2 className="name main-color">{item.name}</h2>
                <span>Race: <span className="second-color">{item.race}</span></span>
                <br />
                <span>Gender: <span className="second-color">{item.gender}</span></span>
                <div className="story">
                    {item.description}
                </div>
                <span>Agent Spotlight</span>
                <div className="video">
                    <iframe
                        title="agent spotlight"
                        ref={iframeRef}
                        width="100%"
                    >    
                    </iframe>
                </div>
            </div>
            <div className="agents-detail__close" onClick={onClose}>
                <img src={closeIcon} alt=""/>
            </div>
        </div>
    )
}

export default AgentsDetail
