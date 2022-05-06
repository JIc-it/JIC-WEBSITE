import React from 'react'

const Map = ({height, mapUrl}) => {
    return (
        <>
            <iframe src={mapUrl}
                width={'100%'}
                height={height}
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
            
        </>

    )
}

export default Map