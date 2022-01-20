import React from "react";
import TuneIcon from '@mui/icons-material/Tune';

import './SearchContainer.css'
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";

export default () => {
    return(
        <div className="searchContainer">
            <div className="searchContainer__filter">
                <TuneIcon />
                <h2>Фильтр</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                channel="МЯЧ Production"
                verifyed
                subs="2.3M"
                videos={658}
                description="Всем привет! МЯЧ production - канал №1 о профессиональном футболе в русскоязычном YouTube по количеству просмотров! "
            />
            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                channel="МЯЧ Production"
                verifyed
                subs="2.3M"
                videos={658}
                description="Всем привет! МЯЧ production - канал №1 о профессиональном футболе в русскоязычном YouTube по количеству просмотров! "
            />

            <hr />

            <div className="searchContainer__videos">
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
    )
}