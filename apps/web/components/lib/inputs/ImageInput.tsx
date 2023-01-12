import Image from 'next/image';
import React, { HTMLInputTypeAttribute, useState } from 'react';

export const ImageInput = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState('');

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div>
      <Image src={createObjectURL} alt="image upload preview" />
      <input type="image" name="myImage" onChange={handleInputOnChange} />
    </div>
  );
};
