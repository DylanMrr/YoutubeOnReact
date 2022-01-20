import React from "react";
import NavigatorType from "./NavigatorType/NavigatorType";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VideoRow from "../VideoRow/VideoRow";

import './Navigator.css'

export default () => {
    return (
        <div className="navigator">
            <div className="navigator__container">
                <div className="navigator__types">
                    <NavigatorType text="В тренде" Icon={WhatshotIcon} iconColor="red"/>
                    <NavigatorType text="Музыка" Icon={MusicNoteIcon} iconColor="yellow"/>
                    <NavigatorType text="Фильмы" Icon={LocalMoviesIcon} iconColor="purple"/>
                    <NavigatorType text="Трансляции" Icon={PodcastsIcon} iconColor="green"/>
                    <NavigatorType text="Видеоигры" Icon={SportsEsportsIcon} iconColor="orange"/>
                    <NavigatorType text="Спорт" Icon={EmojiEventsIcon} iconColor="blue"/>
                </div>

                <h2>Популярные видео</h2>

                <div>
                    <VideoRow 
                        views="1.4M просмотров"
                        veryfied
                        description="Серхио Агуэро недавно завершил карьеру из-за проблем с сердцем. Мы не могли не посвятить ему отдельный выпуск."
                        timestamp="16 часов назад"
                        channel="МЯЧ Production"
                        title="ТОП-5 Причин Величия Серхио Агуэро"
                        channelImage="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                        image="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                    />

                    <VideoRow 
                        views="1.4M просмотров"
                        veryfied
                        description="Серхио Агуэро недавно завершил карьеру из-за проблем с сердцем. Мы не могли не посвятить ему отдельный выпуск."
                        timestamp="16 часов назад"
                        channel="МЯЧ Production"
                        title="ТОП-5 Причин Величия Серхио Агуэро"
                        channelImage="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                        image="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                    />

                    <VideoRow 
                        views="1.4M просмотров"
                        veryfied
                        description="Серхио Агуэро недавно завершил карьеру из-за проблем с сердцем. Мы не могли не посвятить ему отдельный выпуск."
                        timestamp="16 часов назад"
                        channel="МЯЧ Production"
                        title="ТОП-5 Причин Величия Серхио Агуэро"
                        channelImage="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                        image="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                    />

                    <VideoRow 
                        views="1.4M просмотров"
                        veryfied
                        description="Серхио Агуэро недавно завершил карьеру из-за проблем с сердцем. Мы не могли не посвятить ему отдельный выпуск."
                        timestamp="16 часов назад"
                        channel="МЯЧ Production"
                        title="ТОП-5 Причин Величия Серхио Агуэро"
                        channelImage="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                        image="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                    />

                    <VideoRow 
                        views="1.4M просмотров"
                        veryfied
                        description="Серхио Агуэро недавно завершил карьеру из-за проблем с сердцем. Мы не могли не посвятить ему отдельный выпуск."
                        timestamp="16 часов назад"
                        channel="МЯЧ Production"
                        title="ТОП-5 Причин Величия Серхио Агуэро"
                        channelImage="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                        image="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                    />
                </div>
            </div>
        </div>
    )
}