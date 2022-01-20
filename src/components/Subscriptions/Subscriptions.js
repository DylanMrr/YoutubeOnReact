import React, {useState} from "react";

import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';

import VideoCard from "../VideoCard/VideoCard";
import VideoRow from "../VideoRow/VideoRow";

import './Subscriptions.css'

export default () => {
    
    const [isGrid, setIsGrid] = useState(true)
    
    return (
        <div className="subscriptions">
            <div className="subscriptions__container">
                <div className="subscriptions__header">
                    <div>
                        Сегодня
                    </div>
                    <div className="subscriptions__header__left">
                        <div className="subscriptions__header__link">
                            УПРАВЛЕНИЕ ПОДПИСКАМИ
                        </div>
                        <div onClick={() => setIsGrid(true)} className="subscriptions__header__icon">
                            {isGrid ? <ViewComfyIcon /> : <ViewComfyOutlinedIcon />}
                        </div>
                        <div onClick={() => setIsGrid(false)} className="subscriptions__header__icon">
                            {isGrid ? <ViewListOutlinedIcon /> : <ViewListIcon />}
                        </div>
                    </div>
                </div>

                <div className="subscriptions__videos">
                    {
                        isGrid 
                        ? (
                            <div className="subscriptions__videos__grid">
                                <VideoCard 
                                    title="ТОП-5 Причин Величия Серхио Агуэро"
                                    views="64 тыс. просмотров"
                                    timestamp="2 часа назад"
                                    veryfied
                                    channelImage="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                                    channel="МЯЧ Production"
                                    image="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                                />
                                <VideoCard 
                                    title="ТОП-5 Причин Величия Серхио Агуэро"
                                    views="64 тыс. просмотров"
                                    timestamp="2 часа назад"
                                    channelImage="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                                    channel="МЯЧ Production"
                                    image="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                                />
                                <VideoCard 
                                    title="ТОП-5 Причин Величия Серхио Агуэро"
                                    views="64 тыс. просмотров"
                                    timestamp="2 часа назад"
                                    veryfied
                                    channelImage="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                                    channel="МЯЧ Production"
                                    image="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                                />
                                <VideoCard 
                                    title="ТОП-5 Причин Величия Серхио Агуэро"
                                    views="64 тыс. просмотров"
                                    timestamp="2 часа назад"
                                    channelImage="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                                    channel="МЯЧ Production"
                                    image="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                                />
                                <VideoCard 
                                    title="ТОП-5 Причин Величия Серхио Агуэро"
                                    views="64 тыс. просмотров"
                                    timestamp="2 часа назад"
                                    veryfied
                                    channelImage="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                                    channel="МЯЧ Production"
                                    image="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                                />
                                <VideoCard 
                                    title="ТОП-5 Причин Величия Серхио Агуэро"
                                    views="64 тыс. просмотров"
                                    timestamp="2 часа назад"
                                    channelImage="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                                    channel="МЯЧ Production"
                                    image="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                                />
                            </div>
                        )
                        : (
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

                                <hr />

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

                                <hr />

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

                                <hr />

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
                        )
                    }
                </div>
            </div>
        </div>
    )
}