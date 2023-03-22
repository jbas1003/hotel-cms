import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = () => {

    // START: Dropzone Style
    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'darkSeaGreen',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
      };
      
      const focusedStyle = {
        borderColor: '#2196f3'
      };
      
      const acceptStyle = {
        borderColor: '#00e676'
      };
      
      const rejectStyle = {
        borderColor: '#ff1744'
      };

      // END: Dropzone

    const [selectedImage, setSelectedImage] = useState();
    const [imagedata, setImagedata] = useState();
    const [image, setImage] = useState()

    const onDrop = useCallback(acceptedFiles => {
        setSelectedImage(acceptedFiles.map(file => 
            Object.assign(file, {
                preview:URL.createObjectURL(file)
            })    
        ))
      }, [])

    // START: Upload


    // END: Upload

      
      const {getRootProps, getInputProps, isFocused, isDragAccept, isDragReject} = useDropzone({onDrop, accept: {'image/*': []}});

      const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [isFocused, isDragAccept, isDragReject]);

      const selected_image = selectedImage?.map(file => (
        <div>
            <img src={file.preview} style={{ width: "100px" }} alt="" />
        </div>
      ))
      return (
        <div>
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                {
                    <p>Drop the files here ...</p>
                }
            </div>
            <div className='inline-flex mt-2 mb-2'>
                {selected_image}
                {setImagedata(selected_image)}
            </div>
        </div>
      )
}

export default Dropzone