import React, { useState } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const handleCardClick = (service, event) => {
    // Check if the click is on the "Read more" button
    if (event.target.closest('.services_readmore')) {
      return; // Don't navigate if clicking "Read more"
    }
    
    // If service has a link, open it
    if (service.s_link) {
      window.open(service.s_link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div id='services' className='services' >
        <div className='services_title'>
          <h1>My services</h1>
        <img src={theme_pattern} alt="theme pattern" />
        </div>
        <div className="services_coontainer">
            {Services_Data.map((service,index)=>{
                return <div 
                    className={`services_format ${service.s_link ? 'clickable' : ''}`}
                    key={index}
                    onClick={(e) => handleCardClick(service, e)}
                >
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{expandedService === index ? service.s_detail : service.s_desc}</p>
                    {service.s_link && (
                        <div className="project_link_display">
                            <span className="link_label">🔗 Project Link:</span>
                            <a href={service.s_link} target="_blank" rel="noopener noreferrer" className="project_url" onClick={(e) => e.stopPropagation()}>
                                {service.s_link}
                            </a>
                        </div>
                    )}
                    <div className='services_readmore' onClick={() => toggleReadMore(index)}>
                        <p>{expandedService === index ? 'Show less' : 'Read more'}</p>
                        <img src={arrow_icon} alt="arrow icon" style={{
                          transform: expandedService === index ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }} />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services