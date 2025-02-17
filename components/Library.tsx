"use client";

import useAuthModal from '@/hooks/useAuthModal';
import useUploadModal from '@/hooks/useUploadModal';
import { useUser } from '@/hooks/useUser';
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { TbPlaylist } from 'react-icons/tb';
import UploadModal from './UploadModal';
import { Song } from '@/types';
import MediaItem from './MediaItem';

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({
  songs
}) => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const onClick = () => {
      if (!user) {
        return authModal.onOpen();
      }
  
      return uploadModal.onOpen();
    }

  return (
    <div className='flex flex-col'>
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
            <TbPlaylist size={26} className="text-neutral-400" />
            <p className="text-neutral-400 font-medium text-md">
                Your Library
            </p>
        </div>
        <AiOutlinePlus 
        onClick={onClick} 
        size={22}
        className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-3 px-4">
        {songs.map((item) => (
          <MediaItem 
          onClick={() => {}}
          key={item.id}
          data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Library
