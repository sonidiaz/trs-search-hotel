import React, { useState } from 'react'
import Select, { components } from 'react-select'
import '../styles.scss'
const options = [
  { value: 'blu-madrid-calle-de-moratin-52-2zagilaz', label: 'RADISSON BLU HOTEL' },
  { value: 'me-ibiza-santa-eulalia-del-rio-avinguda-de-sargamassa-wuodf3mc', label: 'ME IBIZA' },
  { value: 'onlyyou-madrid-calle-del-barquillo-21-bbk07kma', label: 'ONLY YOU BOUTIQUE HOTEL' },
  { value: 'gran-melia-fenix-madrid-calle-de-hermosilla-2-mmnvo6nx', label: 'FÉNIX GRAN MELIÁ' },
  { value: 'gran-melia-palacio-madrid-cuesta-de-santo-domingo-5-sg2n5iui', label: 'GRAN MELIÁ PALACIO LOS DUQUES' },
]
const FRESHA_URL = 'https://www.fresha.com/es/a/thai-room-'

const Placeholder = (props) => {
  return <components.Placeholder {...props} />;
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

const App = () => {
  const [hotel, setHotel] = useState('')
  const getCurrentUrl = (currentHotel) => {
    let spa = ''
    if(currentHotel === options[0].value 
      || currentHotel === options[1].value
      || currentHotel === options[2].value  ){
        spa = 'spa-'
      }
    return `${FRESHA_URL}${spa}${currentHotel}`
  }
  return ( 
      <div className='wrapper-select'>
        <Select 
          isSearchable={false} 
          placeholder={'Choose the hotel where you want to book'} 
          options={options} 
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            padding: '10px 0',
            colors: {
              ...theme.colors,
              primary25: '#d283f0',
              primary: '#8e58a2',
            },
          })}
          onChange={(e) => {
          setHotel(e.value)
        }}/>
        <a className='' target="_blank" href={getCurrentUrl(hotel)}>BOOK NOW</a>
      </div>
   );
}
 
export default App;