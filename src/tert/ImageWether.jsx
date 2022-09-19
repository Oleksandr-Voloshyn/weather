import React from 'react'

import clear from '../access/sun.png'
import rainy from '../access/rainy.png'
import clouds from '../access/clouds.png'

const ImageWether = ({ wea }) => {
    if (wea === 'Clouds') {
        return <img src={clouds} />
    }
    if (wea === 'Rain') {
        return <img src={rainy} />
    }
    if (wea === 'Clear') {
        return <img src={clear} />
    }
}

export default ImageWether;