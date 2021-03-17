import classnames from 'classnames'
import onChangeVideoURL from "./index";
import hexToRgba from 'hex-to-rgba';

const save = props => {

    const { className } = props;

    const {
        block_id,
        videoBoxId,
        videoType,
        videoURL,
        autoPlay,
        loop,
        controls,
        relatedVideos,
        mute,
        overlay,
        overlayImgURL,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        playLeft,
        playTop,
        playIcon,
        playColor,
        playHoverColor,
        playHoverBackColor,
        playSize,
        playPadding,
        playBack,
        playOpacity,
        playBorderColor,
        playBorderWidth,
        playBorderRadius,
        playBorderType,
        videoDesc,
        descTop,
        descLeft,
        videoDescText,
        videoDescColor,
        videoDescBack,
        videoDescOpacity,
        videoDescPadding,
        videoDescFamily,
        videoDescWeight,
        videoDescLetter,
        videoDescStyle,
        videoDescUpper,
        videoDescBorderRadius,
        descShadowBlur,
        descShadowColor,
        descShadowHorizontal,
        descShadowVertical,
        boxBorderColor,
        boxBorderWidth,
        boxBorderRadius,
        boxBorderType,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition,
        hideDesktop,
        hideTablet,
        hideMobile
    } = props.attributes;
    const loopVideo = () => {
        if ( "youtube" === videoType ) {
            if ( videoURL.startsWith( "http" ) ) {
                return loop
                    ? `1&playlist=${ videoURL.replace(
                        "https://www.youtube.com/embed/",
                        ""
                    ) }`
                    : "0";
            } else {
                return loop ? `1&playlist=${ videoURL }` : "0";
            }
        } else {
            return loop ? "1" : "0";
        }
    };

    const mainClasses = classnames( className, 'premium-video-box' );

    return (
        <div
            id={videoBoxId}
            className={`${ mainClasses } video-overlay-${ overlay }  premium-video-box-${ block_id } ${ hideDesktop } ${ hideTablet } ${ hideMobile }`}
            data-type={videoType}
            style={{
                border: boxBorderType,
                borderWidth: boxBorderWidth + "px",
                borderRadius: boxBorderRadius + "px",
                borderColor: boxBorderColor,
                boxShadow: `${ shadowHorizontal }px ${ shadowVertical }px ${ shadowBlur }px ${ shadowColor } ${ shadowPosition }`
            }}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: [
                        `#${ videoBoxId } .premium-video-box__play:hover {`,
                        `color: ${ playHoverColor } !important;`,
                        `background-color: ${ playHoverBackColor } !important;`,
                        "}"
                    ].join( "\n" )
                }}
            />
            <div className={`premium-video-box__container`}>
                {"self" !== videoType && (
                    <iframe
                        src={`${ onChangeVideoURL( videoType, videoURL ) }?autoplay=${ overlay ? 0 : autoPlay
                            }&loop=${ loopVideo() }&mute${ "vimeo" == videoType ? "d" : ""
                            }=${ mute }&rel=${ relatedVideos ? "1" : "0" }&controls=${ controls ? "1" : "0"
                            }`}
                        frameborder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowfullscreen
                    />
                )}
                {"self" === videoType && (
                    <video
                        src={videoURL}
                        loop={loop ? true : false}
                        muted={mute ? true : false}
                        controls={controls ? true : false}
                        autoplay={overlay ? false : autoPlay}
                    />
                )}
            </div>
            {overlay && overlayImgURL && (
                <div
                    className={`premium-video-box__overlay`}
                    style={{
                        backgroundImage: `url('${ overlayImgURL }')`,
                        filter: `brightness( ${ bright }% ) contrast( ${ contrast }% ) saturate( ${ saturation }% ) blur( ${ blur }px ) hue-rotate( ${ hue }deg )`
                    }}
                />
            )}
            {overlay && playIcon && (
                <div
                    className={`premium-video-box__play`}
                    style={{
                        top: playTop + "%",
                        left: playLeft + "%",
                        color: playColor,
                        backgroundColor: playBack ? hexToRgba( playBack, playOpacity ) : 'transparent',
                        border: playBorderType,
                        borderWidth: playBorderWidth + "px",
                        borderRadius: playBorderRadius + "px",
                        borderColor: playBorderColor,
                        padding: playPadding + "px"
                    }}
                >
                    <i
                        className={`premium-video-box__play_icon dashicons dashicons-controls-play`}
                        style={{
                            fontSize: playSize + "px"
                        }}
                    />
                </div>
            )}
            {overlay && videoDesc && (
                <div
                    className={`premium-video-box__desc`}
                    style={{
                        color: videoDescColor,
                        backgroundColor: videoDescBack ? hexToRgba( videoDescBack, videoDescOpacity ) : "transparent",
                        padding: videoDescPadding,
                        borderRadius: videoDescBorderRadius,
                        top: descTop + "%",
                        left: descLeft + "%"
                    }}
                >
                    <p
                        className={`premium-video-box__desc_text`}
                        style={{
                            fontFamily: videoDescFamily,
                            fontWeight: videoDescWeight,
                            letterSpacing: videoDescLetter + "px",
                            textShadow: `${ descShadowHorizontal }px ${ descShadowVertical }px ${ descShadowBlur }px ${ descShadowColor }`,
                            textTransform: videoDescUpper ? "uppercase" : "none",
                            fontStyle: videoDescStyle
                        }}
                    >
                        <span>{videoDescText}</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default save;