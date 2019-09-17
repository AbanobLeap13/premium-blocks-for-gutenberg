
import classnames from 'classnames';

const { RichText} = wp.editor;

const save = props =>{
    const { className } = props;

    const {
        position,
        widthhh,
        height,
        backfaceVisibility,
        frontTitle,
        frontTitleTag,
        frontTitleColor,
        frontDescription,
        frontDescriptionColor,
        frontBackgroundColor,
        backTitle,
        backTitleTag,
        backTitleColor,
        backDescription,
        backDescriptionColor,
        backBackgroundColor,
        backTransform,
        imgWidth,
        imgHeight,
        frontIconType,
        frontIconSelected,
        frontIconCheck,
        frontIconSize,
        frontIconColor,
        frontIconBackground,
        frontIconAlign,
        frontIconPaddingTop,
        frontIconPaddingRight,
        frontIconPaddingBottom,
        frontIconPaddingLeft,
        frontIconMarginTop,
        frontIconMarginRight,
        frontIconMarginBottom,
        frontIconMarginLeft,
        frontTitleCheck,
        frontTitleSize,
        frontTitlelineHeight,
        frontTitleShadowColor,
        frontTitleShadowBlur,
        frontTitleShadowHorizontal,
        frontTitleShadowVertical, 
        frontTitlePaddingTop,
        frontTitlePaddingRight,
        frontTitlePaddingBottom,
        frontTitlePaddingLeft,
        frontTitleMarginTop,
        frontTitleMarginRight,
        frontTitleMarginBottom,
        frontTitleMarginLeft,
        frontDescCheck,
        frontDescSize,
        frontDesclineHeight,
        frontDescShadowColor,
        frontDescShadowBlur,
        frontDescShadowHorizontal,
        frontDescShadowVertical,
        frontDescPaddingTop,
        frontDescPaddingRight,
        frontDescPaddingBottom,
        frontDescPaddingLeft,
        frontDescMarginTop,
        frontDescMarginRight,
        frontDescMarginBottom,
        frontDescMarginLeft,
        pxUnit,
        paddingUnit,
        marginUnit,
        backIconType,
        backIconSelected,
        backIconCheck,
        backIconSize,
        backIconColor,
        backIconBackground,
        backIconAlign,
        backIconPaddingTop,
        backIconPaddingRight,
        backIconPaddingBottom,
        backIconPaddingLeft,
        backIconMarginTop,
        backIconMarginRight,
        backIconMarginBottom,
        backIconMarginLeft,
        backTitleCheck,
        backTitleSize,
        backTitleLineHeight,
        backTitleShadowColor,
        backTitleShadowBlur,
        backTitleShadowHorizontal,
        backTitleShadowVertical, 
        backTitlePaddingTop,
        backTitlePaddingRight,
        backTitlePaddingBottom,
        backTitlePaddingLeft,
        backTitleMarginTop,
        backTitleMarginRight,
        backTitleMarginBottom,
        backTitleMarginLeft,
        backDescCheck,
        backDescSize,
        backDesclineHeight,
        backDescShadowColor,
        backDescShadowBlur,
        backDescShadowHorizontal,
        backDescShadowVertical,
        backDescPaddingTop,
        backDescPaddingRight,
        backDescPaddingBottom,
        backDescPaddingLeft,
        backDescMarginTop,
        backDescMarginRight,
        backDescMarginBottom,
        backDescMarginLeft,

    } = props.attributes;

    return (
        <div className="premium-flip-container flip-card ">
            <div className="premium-flip-main-box flip-card-inner">

                <div className="premium-flip-front premium-flip-frontlr flip-card-front" style={{backgroundColor: frontBackgroundColor || "#7c5707"}}>
                    <div className="premium-flip-front-overlay">
                        <div className="premium-flip-front-content-container">
                            <div className="premium-flip-front-content">
                                <div className="premium-flip-text-wrapper PafadeInRevLeft">

                                    {frontIconCheck && (
                                        <div 
                                            className={`premium-flipbox__froIcon`}
                                            style={{
                                                width: widthhh ,
                                                height: height,
                                                marginTop: (frontIconMarginTop || "0") + (marginUnit + "px"),
                                                marginRight: (frontIconMarginRight || "0") + (marginUnit + "px"),
                                                marginBottom: (frontIconMarginBottom ||"0") + (marginUnit + "px"),
                                                marginLeft: (frontIconMarginLeft ||"0") + (marginUnit + "px"),
                                            }}
                                        >

                                            {frontIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                <p className={`premium-icon__alert`}>
                                                    {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                </p>
                                            )}
                                            {(frontIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                <i
                                                    className={`premium-icon ${frontIconSelected}`}
                                                    style={{
                                                        width:widthhh,
                                                        height:height,
                                                        color: frontIconColor || "#fff",
                                                        backgroundColor: frontIconBackground || "transparent",
                                                        fontSize: (frontIconSize || 50) + "px",
                                                        paddingTop: (frontIconPaddingTop || "0") + (paddingUnit || "px"),
                                                        paddingRight: (frontIconPaddingRight || "0") + (paddingUnit || "px"),
                                                        paddingBottom: (frontIconPaddingBottom || "0" )+ (paddingUnit || "px"),
                                                        paddingLeft: (frontIconPaddingLeft || "0")+ (paddingUnit || "px"),
                                                    }}
                                                />
                                            )}

                                        </div>
                                    )}

                                    {frontTitleCheck && (
                                        <RichText.Content
                                            tagName="h1"
                                            className={`premium-flip-front-title`}
                                            value={frontTitle}
                                            style={{
                                                color: frontTitleColor || "#e3d192",
                                                fontSize: frontTitleSize + "px",
                                                lineHeight: frontTitlelineHeight + "px",
                                                textShadow: `${frontTitleShadowHorizontal}px ${frontTitleShadowVertical}px ${frontTitleShadowBlur }px ${frontTitleShadowColor}`,
                                                paddingTop: frontTitlePaddingTop + "px",
                                                paddingBottom: frontTitlePaddingBottom + "px",
                                                paddingLeft: frontTitlePaddingLeft + "px",
                                                paddingRight: frontTitlePaddingRight + "px",
                                                marginTop: frontTitleMarginTop + "px",
                                                marginBottom: frontTitleMarginBottom + "px",
                                                marginLeft: frontTitleMarginLeft + "px",
                                                marginRight: frontTitleMarginRight + "px",
                                            }}
                                            keepPlaceholderOnFocus                    
                                        /> 
                                    )}
                                    {frontDescCheck && (
                                        <RichText.Content
                                            tagName="p"
                                            className={`premium-flip-front-description`}
                                            value={frontDescription}
                                            style={{
                                                color : frontDescriptionColor || "#ddd",
                                                fontSize: frontDescSize + "px",
                                                lineHeight: frontDesclineHeight + "px",
                                                textShadow: `${frontDescShadowHorizontal}px ${frontDescShadowVertical}px ${frontDescShadowBlur }px ${frontDescShadowColor}`,
                                                paddingTop: frontDescPaddingTop + "px",
                                                paddingBottom: frontDescPaddingBottom + "px",
                                                paddingLeft: frontDescPaddingLeft + "px",
                                                paddingRight: frontDescPaddingRight + "px",
                                                marginTop: frontDescMarginTop + "px",
                                                marginBottom: frontDescMarginBottom + "px",
                                                marginLeft: frontDescMarginLeft + "px",
                                                marginRight: frontDescMarginRight + "px",
                                            }}
                                            keepPlaceholderOnFocus                    
                                        /> 
                                    )}

                                </div>
                            </div>    
                        </div>  
                    </div>
                </div>

                <div className="premium-flip-back premium-flip-backlr flip-card-back" style={{backgroundColor: backBackgroundColor || "#ae8686" }}>
                    <div className="premium-flip-back-overlay">   
                        <div className="premium-flip-back-content-container">    
                            <div className="premium-flip-back-content">   
                                <div className="premium-flip-back-text-wrapper PafadeInRevRight">      

                                {backIconCheck && (
                                            <div 
                                                className={`premium-flipbox__backIcon`}
                                                style={{
                                                    width: widthhh,
                                                    height: height,
                                                    marginTop: (backIconMarginTop || "0") + "px",
                                                    marginRight: (backIconMarginRight || "0") + "px",
                                                    marginBottom: (backIconMarginBottom || "0")+ "px",
                                                    marginLeft: (backIconMarginLeft || "0") + "px",                                                     
                                                }}
                                            >

                                                {backIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                    <p className={`premium-icon__alert`}>
                                                        {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                    </p>
                                                )}
                                                {( backIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                    <i
                                                        className={`premium-icon ${backIconSelected}`}
                                                        style={{
                                                            width:widthhh,
                                                            height:height,
                                                            color: backIconColor || "#fff",
                                                            backgroundColor: backIconBackground || "transparent",
                                                            fontSize: (backIconSize || 50) + "px",
                                                            paddingTop: (backIconPaddingTop || "0") + "px",
                                                            paddingRight: (backIconPaddingRight || "0") + "px",
                                                            paddingBottom: (backIconPaddingBottom || "0") + "px",
                                                            paddingLeft: (backIconPaddingLeft || "0") + "px",
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        )}       

                                        {backTitleCheck && (
                                            <RichText.Content
                                                tagName="h1"
                                                className={`premium-flip-back-title`}
                                                value={backTitle}
                                                style={{
                                                    color: backTitleColor || "#fff",
                                                    fontSize: backTitleSize + "px",
                                                    lineHeight: backTitleLineHeight + "px",
                                                    textShadow: `${backTitleShadowHorizontal}px ${backTitleShadowVertical}px ${backTitleShadowBlur }px ${backTitleShadowColor}`,
                                                    paddingTop: backTitlePaddingTop + "px",
                                                    paddingBottom: backTitlePaddingBottom + "px",
                                                    paddingLeft: backTitlePaddingLeft + "px",
                                                    paddingRight: backTitlePaddingRight + "px",
                                                    marginTop: backTitleMarginTop + "px",
                                                    marginBottom: backTitleMarginBottom + "px",
                                                    marginLeft: backTitleMarginLeft + "px",
                                                    marginRight: backTitleMarginRight + "px",
                                                }}
                                                keepPlaceholderOnFocus                    
                                            /> 
                                        )}
                                        {backDescCheck && (
                                            <RichText.Content
                                                tagName="p"
                                                className={`premium-flip-back-description`}
                                                value={backDescription}
                                                style={{
                                                    color : backDescriptionColor || "#ddd",
                                                    fontSize: backDescSize + "px",
                                                    lineHeight: backDesclineHeight + "px",
                                                    textShadow: `${backDescShadowHorizontal}px ${backDescShadowVertical}px ${backDescShadowBlur }px ${backDescShadowColor}`,
                                                    paddingTop: backDescPaddingTop + "px",
                                                    paddingBottom: backDescPaddingBottom + "px",
                                                    paddingLeft: backDescPaddingLeft + "px",
                                                    paddingRight: backDescPaddingRight + "px",
                                                    marginTop: backDescMarginTop + "px",
                                                    marginBottom: backDescMarginBottom + "px",
                                                    marginLeft: backDescMarginLeft + "px",
                                                    marginRight: backDescMarginRight + "px",
                                                }}
                                                keepPlaceholderOnFocus                    
                                            /> 
                                        )}

                                </div>                        
                            </div>            
                        </div>
                    </div>                                         
                </div> 

            </div>
        </div>
    );

};

export default save;