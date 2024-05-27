"use client";

import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import useGetSongById from "@/hooks/useGetSongById";
import PlayerContent from "./PlayerContent";


// our media player comp
const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div 
      className="
        fixed 
        bottom-0 backdrop-blur-3xl
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
    >
      {/* here we re passing the key arg, so whenever it changes it completely destroys the elem and rerenders a new elem */}
      {/* we wana enable user to skip the next song, so we wana make sure the player destroys the elem before loading the next song, the hook to play the song doesn't support the dynamice url changes */}
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
}

export default Player;