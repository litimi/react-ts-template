import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import AgoraRTC from "agora-rtc-sdk-ng";

let rtc = {
  localAudioTrack: null,
  localVideoTrack: null,
  client: null
};

let options = {
  // Pass your App ID here.
  appId: "5120879548094dd3b0fe1b8d2f32d2f4",
  // Set the channel name.
  channel: "test",
  // Pass your temp token here.
  token: "0065120879548094dd3b0fe1b8d2f32d2f4IADohkNzK6MtKjdbTPnk3A9zmC3OSncpigLZy0iSzkg9vwx+f9gAAAAAEADjTvSO/DU1YgEAAQD8NTVi",
  // Set the user ID.
  uid: 123456
};

const Home = () => {
  const [agoraRtc, setAgoraRtc] = useState(AgoraRTC)
  useEffect(() => {
    console.log(agoraRtc, 'AgoraRTC')
    rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  },[agoraRtc])
  useEffect(() => {
    rtc.client.on("user-published", onUserPublished)
  }, [rtc.localVideoTrack])
  const onUserPublished = () => {
    
  }
  const handlerJoin = async () => {
    await rtc.client.join(options.appId, options.channel, options.token, options.uid);
    rtc.localVideoTrack = await agoraRtc.createCameraVideoTrack()
    rtc.localAudioTrack = await agoraRtc.createMicrophoneAudioTrack();
    await rtc.client.publish([rtc.localAudioTrack,rtc.localVideoTrack])
    rtc.localVideoTrack.play(`stream-player-${options.uid}`)
  }
  const handlerClick = async () => {
  }
  return(
    <div className='home'>
      2222
      <div onClick={handlerJoin}>join</div>
      <div onClick={handlerClick}>开始</div>
      <div className={'stream-player'} id={`stream-player-${options.uid}`}></div>
    </div>
  )
}

export default Home;
