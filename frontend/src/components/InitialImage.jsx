import React, { useState,useEffect } from 'react'
import Image from './Image'
import api from '../utils/api'

const InitialImage = ({add_image}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        const get_images = async () => {
            try {
                const { data } = await api.get('/api/design-images')
                setImages(data.images)
            } catch (error) {
                console.log(error)
            }
        }
        get_images()
    }, [])

    return (
        <Image add_image={add_image} images={images} />
    )
}

export default InitialImage