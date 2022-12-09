import React, { useEffect, useState } from 'react'
import Select, { components } from 'react-select'
import '../styles.scss'
const options = [
  { value: 'blu-madrid-calle-de-moratin-52-2zagilaz', label: 'RADISSON BLU HOTEL (MADRID)' },
  { value: 'me-ibiza-santa-eulalia-del-rio-avinguda-de-sargamassa-wuodf3mc', label: 'ME IBIZA (IBIZA)' },
  { value: 'onlyyou-madrid-calle-del-barquillo-21-bbk07kma', label: 'ONLY YOU BOUTIQUE HOTEL (MADRID)' },
  { value: 'gran-melia-fenix-madrid-calle-de-hermosilla-2-mmnvo6nx', label: 'FÉNIX GRAN MELIÁ (MADRID)' },
  { value: 'gran-melia-palacio-madrid-cuesta-de-santo-domingo-5-sg2n5iui', label: 'GRAN MELIÁ PALACIO LOS DUQUES (MADRID)' },
]
const options_brochure = [
  { value: 'ThaiRoom-Radisson-Blu-Treatments', label: 'RADISSON BLU HOTEL (MADRID)' },
  { value: 'ThaiRoom-ME-Ibiza-Brochure', label: 'ME IBIZA (IBIZA)' },
  { value: 'thairoom-only-you', label: 'ONLY YOU BOUTIQUE HOTEL (MADRID)' },
  { value: 'ThaiRoom-Fenix-Gran_Melia', label: 'FÉNIX GRAN MELIÁ (MADRID)' },
  { value: 'ThaiRoom-Los_Duques-Treatments', label: 'GRAN MELIÁ PALACIO LOS DUQUES (MADRID)' },
  { value: 'ThaiRoom-La-Marina', label: 'THAI ROOM SPA LA MARINA (TENERIFE)' },
]
const BROCHURE_URL = 'https://thairoomspa.com/brochure'
const FRESHA_URL = 'https://www.fresha.com/es/a/thai-room-'

const langData = {
  placeholderSelect: ['¿DÓNDE PUEDES ENCONTRARNOS?', 'WHERE CAN YOU FIND US?'],
  buttonLabel: ['RESERVAR', 'BOOK NOW']
}

const currentLangUrl = window.location.host + window.location.pathname

const App = () => {
  const [hotel, setHotel] = useState('')
  const [target, settarget] = useState('_self')
  const [lang, setLang] = useState('en');
  const getCurrentUrl = (currentHotel) => {
    if(currentHotel === '') return '#';
    return `${BROCHURE_URL}/${currentHotel}.pdf`
  }
  useEffect(() => {
    if(currentLangUrl.includes( window.location.host+'/es/')) {
      setLang('es');
    }
  }, [])
  
  return ( 
      <div className='wrapper-select'>
        <Select 
          isSearchable={false} 
          classNamePrefix="trs-select-container"
          placeholder={(lang === 'es') ? langData.placeholderSelect[0] : langData.placeholderSelect[1]} 
          options={options_brochure} 
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: '#A27D4A',
              primary: 'black',
            },
          })}
          onChange={(e) => {
            settarget('_blank')
          setHotel(e.value)
        }}/>
        <a className='' target={target} href={getCurrentUrl(hotel)}>{(lang === 'es') ? langData.buttonLabel[0] : langData.buttonLabel[1]} </a>
      </div>
   );
}
 
export default App;