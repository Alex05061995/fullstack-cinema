export interface IViodeoPlayer {
    videoSource: string;
    slug: string;
}

export interface IVideoElement extends HTMLVideoElement {
    msRequestFullScreen?: () => void;
    mozRequestFullScreen?: () => void;
    webkitRequestFullScreen?: () => void;
}