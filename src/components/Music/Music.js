import { useEffect, useRef, useState } from 'react';
import './Music.css';

function Music()
{
    useEffect(() =>
    {
        document.title = "MFikriA  | Music";
    });

    const [currentMusicDetails, setCurrentMusicDetails] = useState({
        songName: 'Aku Kamu dan Samudra',
        songArtist: 'Rebellion Rose',
        songSrc: './assets/Rebellion Rose  Aku Kamu dan Samudra Official Video Lirik.mp3',
        songAvatar: './assets/logo.png'
    })

    //UseStates Variables
    const [audioProgress, setAudioProgress] = useState(0);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [musicIndex, setMusicIndex] = useState(0);
    const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
    const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
    const [videoIndex, setVideoIndex] = useState(0)

    const currentAudio = useRef()

    const handleMusicProgressBar = (e) =>
    {
        setAudioProgress(e.target.value);
        currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
    }

    //Change Avatar Class
    let avatarClass = ['objectFitCover', 'objectFitContain', 'none']
    const [avatarClassIndex, setAvatarClassIndex] = useState(0)
    const handleAvatar = () =>
    {
        if (avatarClassIndex >= avatarClass.length - 1)
        {
            setAvatarClassIndex(0)
        } else
        {
            setAvatarClassIndex(avatarClassIndex + 1)
        }
    }


    //Play Audio Function
    const handleAudioPlay = () =>
    {
        if (currentAudio.current.paused)
        {
            currentAudio.current.play();
            setIsAudioPlaying(true)
        } else
        {
            currentAudio.current.pause();
            setIsAudioPlaying(false)
        }
    }

    const musicAPI = [
        {
            songName: 'Rungkad',
            songArtist: 'Happy Asmara',
            songSrc: './assets/02.RUNGKAD - HAPPY ASMARA ｜ 3PEMUDA BERBAHAYA FEAT SALLSA BINTAN COVER.mp3',
            songAvatar: './assets/logo.png'
        },
        {
            songName: 'KLEBUS',
            songArtist: 'NGATMOMBILUNG',
            songSrc: './assets/03.KLEBUS - NGATMOMBILUNG ｜ 3PEMUDA BERBAHAYA FEAT SALLSA BINTAN COVER.mp3',
            songAvatar: './assets/logo.png'
        },
        {
            songName: 'ONLY',
            songArtist: 'Lee Hi',
            songSrc: './assets/04.ONLY - Lee Hi (Melisa Hart ft. Roomate Project Cover) Live Session.mp3',
            songAvatar: './assets/logo.png'
        },
        {
            songName: 'Momonon ',
            songArtist: 'KOPI HITAM',
            songSrc: './assets/12.KOPI HITAM - Momonon - reggae ska cover by jovita aurel.mp3',
            songAvatar: './assets/logo.png'
        },
        {
            songName: 'Cinta Itu Asu',
            songArtist: 'none',
            songSrc: './assets/18.Cinta Itu Asu.mp3',
            songAvatar: './assets/logo.png'
        },
        {
            songName: 'Rasah Bali',
            songArtist: ' LAVORA Ft Ena Vika',
            songSrc: './assets/Rasah Bali  LAVORA Ft Ena Vika Official Music Video DWILOGI EPS 2.mp3',
            songAvatar: './assets/logo.png'
        },
        {
            songName: 'Human',
            songArtist: 'RagnBone Man',
            songSrc: './assets/RagnBone Man  Human Official Video.mp3',
            songAvatar: './assets/logo.png'
        },
        {
            songName: 'Aku Kamu dan Samudra',
            songArtist: 'Rebellion Rose',
            songSrc: './assets/Rebellion Rose  Aku Kamu dan Samudra Official Video Lirik.mp3',
            songAvatar: './assets/logo.png'
        }
    ]

    const handleNextSong = () =>
    {
        if (musicIndex >= musicAPI.length - 1)
        {
            let setNumber = 0;
            setMusicIndex(setNumber);
            updateCurrentMusicDetails(setNumber);
        } else
        {
            let setNumber = musicIndex + 1;
            setMusicIndex(setNumber)
            updateCurrentMusicDetails(setNumber);
        }
    }

    const handlePrevSong = () =>
    {
        if (musicIndex === 0)
        {
            let setNumber = musicAPI.length - 1;
            setMusicIndex(setNumber);
            updateCurrentMusicDetails(setNumber);
        } else
        {
            let setNumber = musicIndex - 1;
            setMusicIndex(setNumber)
            updateCurrentMusicDetails(setNumber);
        }
    }

    const updateCurrentMusicDetails = (number) =>
    {
        let musicObject = musicAPI[number];
        currentAudio.current.src = musicObject.songSrc;
        currentAudio.current.play();
        setCurrentMusicDetails({
            songName: musicObject.songName,
            songArtist: musicObject.songArtist,
            songSrc: musicObject.songSrc,
            songAvatar: musicObject.songAvatar
        })
        setIsAudioPlaying(true);
    }

    const handleAudioUpdate = () =>
    {
        //Input total length of the audio
        let minutes = Math.floor(currentAudio.current.duration / 60);
        let seconds = Math.floor(currentAudio.current.duration % 60);
        let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
        setMusicTotalLength(musicTotalLength0);

        //Input Music Current Time
        let currentMin = Math.floor(currentAudio.current.currentTime / 60);
        let currentSec = Math.floor(currentAudio.current.currentTime % 60);
        let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
        setMusicCurrentTime(musicCurrentT);

        const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
        setAudioProgress(isNaN(progress) ? 0 : progress)
    }


    const vidArray = ['./assets/A E S T H E T I C  ( Anime Visuals ).f243.webm'];

    const handleChangeBackground = () =>
    {
        if (videoIndex >= vidArray.length - 1)
        {
            setVideoIndex(0);
        } else
        {
            setVideoIndex(videoIndex + 1)
        }
    }


    return (
        <>
            <div className="containerr music">
                <audio src='#' ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
                <video src={vidArray[videoIndex]} loop muted autoPlay className='backgroundVideo'></video>
                <div className="blackScreen"></div>
                <div className="music-Container">
                    <p className='musicPlayer'>Music Player</p>
                    <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
                    <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
                    <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar' />
                    <div className="musicTimerDiv">
                        <p className='musicCurrentTime'>{musicCurrentTime}</p>
                        <p className='musicTotalLenght'>{musicTotalLength}</p>
                    </div>
                    <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
                    <div className="musicControlers">
                        <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
                        <i className={`fa-solid ${isAudioPlaying ? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
                        <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Music;