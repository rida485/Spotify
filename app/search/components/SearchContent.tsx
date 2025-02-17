"use client";

import { Song } from "@/types";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";


// this component is used to display the search results(below the search I/p)
interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({
  songs
}) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div 
        className="
          flex 
          flex-col 
          gap-y-2 
          w-full 
          px-6 
          text-neutral-400
        "
      >
        No songs found.
      </div>
    )
  }

  return ( 
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song: Song) => (
        <div 
          key={song.id} 
          className="flex items-center gap-x-4 w-full"
        >
          <div className="flex-1">
            <MediaItem 
              onClick={(id: string) => onPlay(id)} 
              data={song}
            />
            {/* once the media Item shows(songs list) we'l ve the option to like the songs */}
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default SearchContent;