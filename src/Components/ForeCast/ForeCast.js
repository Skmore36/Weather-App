import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading } from 'react-accessible-accordion'
import './ForeCast.css'
const WEEK_DAYS =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const ForeCast = ({data}) => {
    const DayInAWeek = new Date().getDay()
    const foreCastDays = WEEK_DAYS.slice(DayInAWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,DayInAWeek))
    console.log("Days : ",foreCastDays)
    return (
    <div>
        <label className='title'>Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0,7).map((item,idx)=>(
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt='weather'className='icon' src={`icons/${item.weather[0].icon}.png`}></img>
                                <label className='day'>{foreCastDays[idx]}</label>
                                <label className='description'>{item.weather[0].description}</label>
                                <label className='temp'>{Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}°C</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  )
}

export default ForeCast