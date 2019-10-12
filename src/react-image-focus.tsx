import * as React from 'react';
import {FocusedImage as FocusedImageFn} from 'image-focus';
import { useRef, useEffect, MutableRefObject, useState, useMemo } from 'react';

interface FocusedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  focus: {
    x: number;
    y: number;
  };
}

export function FocusedImage({focus, ...imgProps}:FocusedImageProps):JSX.Element{
  const imgRef:MutableRefObject<HTMLImageElement> = useRef();
  const focusedImageInstanceRef: MutableRefObject<FocusedImageFn> = useRef();
  
  useEffect(() => {
    focusedImageInstanceRef.current = new FocusedImageFn(imgRef.current, {focus});
    return () => focusedImageInstanceRef.current.stopListening();
  }, []);

  useEffect(() => {
    if(focusedImageInstanceRef.current){
      focusedImageInstanceRef.current.setFocus(focus);
    }
  }, [focus]);

  return <img ref={imgRef} {...imgProps}/>
}