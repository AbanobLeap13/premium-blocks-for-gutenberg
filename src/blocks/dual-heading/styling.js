import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling(props) {

    const {
        block_id,
        classMigrate,
        firstSize,
        firstSizeUnit,
        firstSizeTablet,
        firstSizeMobile,
        secondSize,
        secondSizeUnit,
        secondSizeTablet,
        secondSizeMobile,
        firstPaddingT,
        firstPaddingR,
        firstPaddingB,
        firstPaddingL,
        firstPaddingTTablet,
        firstPaddingRTablet,
        firstPaddingBTablet,
        firstPaddingLTablet,
        firstPaddingTMobile,
        firstPaddingRMobile,
        firstPaddingBMobile,
        firstPaddingLMobile,
        secondPaddingT,
        secondPaddingR,
        secondPaddingB,
        secondPaddingL,
        secondPaddingTTablet,
        secondPaddingRTablet,
        secondPaddingBTablet,
        secondPaddingLTablet,
        secondPaddingTMobile,
        secondPaddingRMobile,
        secondPaddingBMobile,
        secondPaddingLMobile,
    } = props.attributes;

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-dheading-block__first": {
            "font-size": generateCSSUnit(firstSize, firstSizeUnit),
            "padding-top": `${firstPaddingT}px`,
            "padding-right": `${firstPaddingR}px`,
            "padding-bottom": `${firstPaddingB}px`,
            "padding-left": `${firstPaddingL}px`,
        },
        " .premium-dheading-block__second": {
            'font-size': generateCSSUnit(secondSize, secondSizeUnit),
            "padding-top": `${secondPaddingT}px`,
            "padding-right": `${secondPaddingR}px`,
            "padding-bottom": `${secondPaddingB}px`,
            "padding-left": `${secondPaddingL}px`,
        }
    }
    tablet_selectors = {
        " .premium-dheading-block__first": {
            "font-size": generateCSSUnit(firstSizeTablet, firstSizeUnit),
            "padding-top": `${firstPaddingTTablet}px`,
            "padding-right": `${firstPaddingRTablet}px`,
            "padding-bottom": `${firstPaddingBTablet}px`,
            "padding-left": `${firstPaddingLTablet}px`,
        },
        " .premium-dheading-block__second": {
            'font-size': generateCSSUnit(secondSizeTablet, secondSizeUnit),
            "padding-top": `${secondPaddingTTablet}px`,
            "padding-right": `${secondPaddingRTablet}px`,
            "padding-bottom": `${secondPaddingBTablet}px`,
            "padding-left": `${secondPaddingLTablet}px`,
        }
    }
    mobile_selectors = {
        " .premium-dheading-block__first": {
            "font-size": generateCSSUnit(firstSizeMobile, firstSizeUnit),
            "padding-top": `${firstPaddingTMobile}px`,
            "padding-right": `${firstPaddingRMobile}px`,
            "padding-bottom": `${firstPaddingBMobile}px`,
            "padding-left": `${firstPaddingLMobile}px`,
        },
        " .premium-dheading-block__second": {
            'font-size': generateCSSUnit(secondSizeMobile, secondSizeUnit),
            "padding-top": `${secondPaddingTMobile}px`,
            "padding-right": `${secondPaddingRMobile}px`,
            "padding-bottom": `${secondPaddingBMobile}px`,
            "padding-left": `${secondPaddingLMobile}px`,
        }
    }

    var styling_css = ""
    var id = `#premium-dheading-block-${block_id}`
    if (classMigrate) {
        id = `.premium-dheading-${block_id}`
    }

    styling_css = generateCSS(selectors, id)

    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css

}
export default styling;