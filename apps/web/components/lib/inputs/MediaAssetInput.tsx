import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiCheck, FiChevronUp, FiPlus } from 'react-icons/fi';

interface MediaAssetInputProps {
  fieldName: string;
}
export const MediaAssetInput = ({ fieldName }: MediaAssetInputProps) => {
  const [fileToBeUploaded, setFileToBeUploaded] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerFileSelect = (): void => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAddPendingFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target && e.target.files) {
      const file = e.target.files[0];
      setFileToBeUploaded(file);
      e.target.value = '';
    }
  };

  const handleUploadingPendingFile = () => {
    console.log('uploading file');
    if (!fileToBeUploaded) {
      // TODO: dont throw an error here
      throw new Error('No File to be Uploaded!');
    }
    const formData = new FormData();
    formData.append(fieldName, fileToBeUploaded);
  };

  let filePreviewUrl = '';
  if (fileToBeUploaded) {
    filePreviewUrl = URL.createObjectURL(fileToBeUploaded);
  }

  const renderfileActionIcon = () => {
    if (!filePreviewUrl) {
      return <InputIconButton onClick={triggerFileSelect} variant="empty" />;
    }
    return <InputIconButton onClick={handleUploadingPendingFile} variant="pending" />;
  };
  return (
    <div className="flex flex-col gap-2">
      {/* FIELD NAME */}
      <div className="flex justify-between">
        <div className="flex text-md">File Name: {fieldName}</div>
        <div className="flex ">{renderfileActionIcon()}</div>
      </div>
      {/* UPLOAD ICON */}
      <div className="flex h-[250px]">
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAddPendingFile} hidden />
        {filePreviewUrl && (
          <div className="flex w-full card bg-slate-600">
            <Image src={filePreviewUrl} alt={fieldName} fill style={{ objectFit: 'contain' }} />
          </div>
        )}
      </div>
    </div>
  );
};

type InputIconButtonProps = {
  onClick: () => void;
  variant: 'empty' | 'pending' | 'success';
};

const InputIconButton = ({ onClick, variant }: InputIconButtonProps) => {
  let icon: React.ReactElement<IconBaseProps> | null = null;
  let className = 'btn btn-circle btn-xs ';
  switch (variant) {
    case 'empty': {
      icon = <FiPlus />;
      className = className + 'bg-slate-500';
      console.log(className);
      break;
    }
    case 'pending': {
      icon = <FiChevronUp />;
      className = className + 'bg-orange-500';
      break;
    }
    case 'success': {
      icon = <FiCheck />;
      className = className + 'bg-green-500';
      break;
    }
    default:
      return null;
  }

  return icon === null ? null : (
    <div className={className} onClick={onClick}>
      {icon}
    </div>
  );
};
