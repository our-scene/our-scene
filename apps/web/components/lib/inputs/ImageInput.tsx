import Image from 'next/image';
import React, { useState } from 'react';

export const ImageUploadInput = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState('');

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e: ', e);
    const file = e.currentTarget.files;
    console.log({ file });
  };

  return (
    <div>
      <Image src={createObjectURL} alt="image upload preview" />
      <input type="image" name="myImage" onChange={handleInputOnChange} />
    </div>
  );
};
