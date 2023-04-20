import classNames from 'classnames';
import { FC } from 'react';

import { MaterialIcon } from '../MaterialIcon';

import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder';
import { useVideo } from './useVideo';
import styles from './video-player.module.scss';
import { IViodeoPlayer } from './video.interface';
import { useAuth } from '@/hooks/useAuth';

const VideoPlayer: FC<IViodeoPlayer> = ({ slug, videoSource }) => {
	const { actions, video, videoRef } = useVideo();
	const { user } = useAuth();

	return (
		<div className={classNames(styles.wrapper, { 'h-96': !user })}>
			{user ? (
				<>
					<video
						className={styles.video}
						src={`${videoSource}#t=8`}
						ref={videoRef}
						preload="metadata"
					/>

					<div className={styles.progressBarContainer}>
						<div className={styles.progressBar} style={{ width: `${video.progress}%` }} />
					</div>

					<div className={styles.controls}>
						<div>
							<button onClick={actions.revert}>
								<MaterialIcon name="MdHistory" />
							</button>
							<button onClick={actions.toggleVideo}>
								<MaterialIcon
									name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
								/>
							</button>
							<button onClick={actions.forward}>
								<MaterialIcon name="MdUpdate" />
							</button>

							<div className={styles.timeControls}>
								<p className={styles.controlsTime}>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={styles.controlsTime}>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>
						<div>
							<button onClick={actions.fullScreen}>
								<MaterialIcon name="MdFullscreen" />
							</button>
						</div>
					</div>
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	);
};

export default VideoPlayer;
