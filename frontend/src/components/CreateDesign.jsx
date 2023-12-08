import React, { useEffect, useRef, useState } from 'react'
import * as htmlToImage from 'html-to-image';
import { useLocation, useNavigate } from 'react-router-dom'
import RotateLoader from 'react-spinners/RotateLoader'
import api from '../utils/api'

import CreateComponent from './CreateComponent'

const CreateDesign = () => {

    const ref = useRef()

    const { state } = useLocation()

    const navigate = useNavigate()


    const obj = {
        name: "main_frame",
        type: "rect",
        id: Date.now(),
        height: state.height,
        width: state.width,
        z_index: 1,
        color: '#fff',
        image: ""
    }

    const [loader, setLoader] = useState(false)


    const create_design = async () => {

        const image = await htmlToImage.toBlob(ref.current)

        const design = JSON.stringify(obj)

        if (image) {

            const formData = new FormData()
            formData.append('design', design)
            formData.append('image', image)
            try {
                setLoader(true)
                const { data } = await api.post('/api/create-user-design', formData)
                navigate(`/design/${data.design._id}/edit`)
                setLoader(false)
            } catch (error) {
                setLoader(false)
                console.log(error.response.data)
            }
        }

    }

    useEffect(() => {
        if (state && ref.current) {
            create_design()
        } else {
            navigate('/')
        }
    }, [state, ref])
    return (
        <div className='w-screen h-screen flex justify-center items-center relative'>
            <div ref={ref} className='relative w-auto h-auto overflow-auto'>
                <CreateComponent info={obj} current_component={{}} />
            </div>
            {
                loader && <div className='left-0 top-0 w-full h-full flex justify-center items-center bg-black absolute'><RotateLoader color='white' /></div>
            }
        </div>
    )
}

export default CreateDesign