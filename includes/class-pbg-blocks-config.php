<?php
/**
 *Config.
 *
 * @package
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Config' ) ) {

	/**
	 * Class Config.
	 */
	class Config {

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $block_attributes = null;

		/**
		 * Block Assets
		 *
		 * @var block_attributes
		 */
		public static $block_assets = null;

		/**
		 * Get Widget List.
		 *
		 * @since 0.0.1
		 *
		 * @return array The Widget List.
		 */
		public static function get_block_attributes() {

			if ( null === self::$block_attributes ) {
				self::$block_attributes = array(
					'premium/icon-list'         => array(
						'slug'        => '',
						'title'       => __( 'Icon List', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block allows you to place an image or icon in a list format.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'classMigrate'     => false,
							'align'            => 'left',
							'multiTitleCount'       => '1',
							'icons'            => array(
								array(
									'label'               => __( 'Title #1', 'premium-block-for-gutenberg' ),
									'image_icon'          => 'icon',
									'icon'                => 'fab fa-facebook',
									'image'               => '',
									'icon_color'          => '#3a3a3a',
									'icon_hover_color'    => '#3a3a3a',
									'icon_bg_color'       => '',
									'icon_bg_hover_color' => '',
									'item_bg_color'   => '',
									'item_bg_hover_color' => '',
									'label_color'         => '',
									'label_hover_color'   => '',
									'link'                => '#',
									'target'              => false,
								),
							),
							'layoutPos'              => 'block',
							'iconPosition'        => 'left',
							'linkTarget'             => 'false',
							'size'         => '20',
							'sizeType'         => 'px',
							'sizeMobile'       => '',
							'sizeTablet'       => '',
							'fontSize'         => '',
							'fontSizeType'     => 'px',
							'fontSizeMobile'   => '',
							'fontSizeTablet'   => '',
							'iconPaddingType'  => 'px',
							'iconPadding'           => '0',
							'iconPaddingMobile'           => '0',
							'iconPaddingTablet'     => '0',
							'titleLetter'       => '',
							'titleStyle'           => '0',
							'titleUpper'           => '0',
							'titleWeight'     => '500',
							'titleFont'         => '',
							'borderType'     => 'none',
							'borderWidth'   => '1',
							'borderRadius'   => '100',
							'borderColor'       => '',
							'iconSpacing'   => '10',
							'iconSpacingTablet' => '10',
							'iconSpacingMobile' => '10',
							'iconSpacingType' => 'px',
							'titlePaddingTablet' => 'px',
							'titlePadding' => '10',
							'titlePaddingTablet' => '10',
							'titlePaddingMobile' => '10',
							'titlePaddingType'  => 'px',
							'itemMarginL' => '1',
							'itemMarginR'       => '1',
							'itemMarginT'       => '1',
							'itemMarginB'       => '1  ',
							'marginTop'         => '',
							'marginTopType'     => 'px',
							'marginTopMobile'   => '',
							'marginTopTablet'   => '',
							'marginRight'         => '',
							'marginRightType'     => 'px',
							'marginRightMobile'   => '',
							'marginRightTablet'   => '',
							'marginBottom'         => '',
							'marginBottomType'     => 'px',
							'marginBottomMobile'   => '',
							'marginBottomTablet'   => '',
							'marginLeft'         => '',
							'marginLeftType'     => 'px',
							'marginLeftMobile'   => '',
							'marginLeftTablet'   => '',
						),
					),
					'premium/content-switcher'         => array(
						'slug'        => '',
						'default'     => true,
						'attributes'  => array(
							'classMigrate'     => false,
							'align'            => 'center',
							'block_id'        => '',
							'firstLabel'   => 'Content #1',
							'secondLabel'  => 'Content #2',
							'showLabel'    => true,
							'display'     => 'inline',
							'firstContent' => 'Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.',
							'secondContent' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
							'switchCheck'  => false,
							'firstcontentlign' => 'center',
							'secondcontentlign' => 'center',
							'switchSizeType'  => 'px',
							'switchSize'  => '15',
							'switchSizeMobile' => '15',
							'switchSizeTablet' => '15',
							'bottomSpacing'  => '1',
							'bottomSpacingType' => 'px',
							'bottomSpacingMobile' => '1',
							'bottomSpacingTablet' => '1',
							'firstStateColor'  => '#6ec1e4',
							'secondStateColor'  => '#6ec1e4',
							'switcherBGColor'  => '#f2f2f2',
							'labelSpacingType'  => 'px',
							'labelSpacing'  => '15',
							'labelSpacingMobile' => '15',
							'labelSpacingTablet' => '15',
							'firstLabelColor'  => '#54595f',
							'firstLabelLetter' => '',
							'firstLabelStyle' => '',
							'firstLabelUpper' => false,
							'firstLabelWeight' => '500',
							'firstLabelfontSize' => '20',
							'firstLabelfontSizeType' => 'px',
							'firstLabelfontSizeMobile' => '20',
							'firstLabelfontSizeTablet' => '20',
							'secondLabelColor'  => '#54595f',
							'secondLabelLetter' => '',
							'secondLabelStyle' => '',
							'secondLabelUpper' => false,
							'secondLabelWeight' => '500',
							'secondLabelfontSize' => '20',
							'secondLabelfontSizeType' => 'px',
							'secondLabelfontSizeMobile' => '20',
							'secondLabelfontSizeTablet' => '20',
							'shadowColor' => '',
							'shadowBlur'  => '0',
							'shadowHorizontal'  => '0',
							'shadowVertical'  => '0',
							'firstContentHeight' => '50',
							'firstContentHeightType' => 'px',
							'firstContentHeightMobile' => '50',
							'firstContentHeightTablet' => '50',
							'firstContentColor' => '#54595f',
							'firstContentBGColor' => '',
							'secondContentHeight' => '50',
							'secondContentHeightType' => 'px',
							'secondContentHeightMobile' => '50',
							'secondContentHeightTablet' => '50',
							'secondContentColor' => '#54595f',
							'secondContentBGColor' => '',
							'firstpaddingTop'         => '',
							'firstpaddingTopType'     => 'px',
							'firstpaddingTopMobile'   => '',
							'firstpaddingTopTablet'   => '',
							'firstpaddingRight'         => '',
							'firstpaddingRightType'     => 'px',
							'firstpaddingRightMobile'   => '',
							'firstpaddingRightTablet'   => '',
							'firstpaddingBottom'         => '',
							'firstpaddingBottomType'     => 'px',
							'firstpaddingBottomMobile'   => '',
							'firstpaddingBottomTablet'   => '',
							'firstpaddingLeft'         => '',
							'firstpaddingLeftType'     => 'px',
							'firstpaddingLeftMobile'   => '',
							'firstpaddingLeftTablet'   => '',
							'secondpaddingTop'         => '',
							'secondpaddingTopType'     => 'px',
							'secondpaddingTopMobile'   => '',
							'secondpaddingTopTablet'   => '',
							'secondpaddingRight'         => '',
							'secondpaddingRightType'     => 'px',
							'secondpaddingRightMobile'   => '',
							'secondpaddingRightTablet'   => '',
							'secondpaddingBottom'         => '',
							'secondpaddingBottomType'     => 'px',
							'secondpaddingBottomMobile'   => '',
							'secondpaddingBottomTablet'   => '',
							'secondpaddingLeft'         => '',
							'secondpaddingLeftType'     => 'px',
							'secondpaddingLeftMobile'   => '',
							'secondpaddingLeftTablet'   => '',
							'switchRadius'  => '50',
							'switchRadiusType' => 'px',
							'firstContentfontSize' => '15',
							'firstContentfontSizeType' => 'px',
							'firstContentfontSizeMobile' => '15',
							'firstContentfontSizeTablet' => '15',
							'firstContentLetter' => '',
							'firstContentUpper' => false,
							'firstContentStyle' => '',
							'firstContentWeight' => '500',
							'secondContentfontSize' => '15',
							'secondContentfontSizeType' => 'px',
							'secondContentfontSizeMobile' => '15',
							'secondContentfontSizeTablet' => '15',
							'secondContentLetter' => '',
							'secondContentUpper' => false,
							'secondContentStyle' => '',
							'secondContentWeight' => '500',
						)
					),
					'premium/progress-bar'         => array(
						'slug'        => '',
						'default'     => true,
						'attributes'  => array(
							'classMigrate'     => false,
							'align'            => 'center',
							'block_id'        => '',
							'multiStage'  => false,
							'percentage' => '50%',
							'label' => 'label',
							'progressBarHeight' => '25',
							'progressBarHeightType' => 'px',
							'progressBarHeightMobile' => '25',
							'progressBarHeightTablet' => '25',
							'progressBarRadius' => '0',
							'progressBarRadiusType' => 'px',
							'progressBarRadiusMobile' => '0',
							'progressBarRadiusTablet' => '0',
							'progressBarbgColor' => '#f5f5f5',
							'progressBarColor' => '#6ec1e4',
							'labelColor'  => '#6ec1e4',
							'LabelLetter' => '0',
							'LabelStyle' => '',
							'LabelUpper' => false,
							'LabelWeight' => '500',
							'LabelfontSize' => '20',
							'LabelfontSizeType' => 'px',
							'LabelfontSizeMobile' => '20',
							'LabelfontSizeTablet' => '20',
							'percentageColor'  => '#6ec1e4',
							'percentageLetter' => '1',
							'percentageStyle' => '',
							'percentageWeight' => '500',
							'percentagefontSize' => '20',
							'percentagefontSizeType' => 'px',
							'percentagefontSizeMobile' => '20',
							'percentagefontSizeTablet' => '20',
							'progress'  => '0',
							'progressType' => '%',
							'arrowColor'  => '#6ec1e4',
							'arrow' => '10',
							'arrowType' => 'px',
							'arrowTablet' => '10',
							'arrowMobile' => '10',
							'indicator'  => 'arrow',
							'pinColor' => '#54595f',
							'pin' => '1',
							'pinType' => 'px',
							'pinTablet' => '1',
							'pinMobile' => '1',
							'pinHeight' => '12',
							'pinHeightType' => 'px',
							'pinHeightTablet' => '12',
							'pinHeightMobile' => '12',
							'speeds' => '1'
						)
					),
					'premium/tab'         => array(
						'slug'        => '',
						'default'     => true,
						'attributes'  => array(
							'classMigrate'     => false,
							'align'            => 'center',
							'block_id'        => '',
							'tabborderType' => 'none',
							'tabborderWidth' => '1',
							'tabborderColor' => '#d4d4d4',
							'tabBGColor' => '#6ec1e4',
							'tabborderRadius' => '0',
							'activetitleColor' => '#6ec1e4',
							'titleWeight' => '500',
							'titleLetter' => '0',
							'titleUpper' => false,
							'titleStyle' => 'normal',
							'titlefontSize' => '20',
							'titlefontSizeMobile' => '20',
							'titlefontSizeTablet' => '20',
							'titlefontSizeType' => 'px',
							'contentColor' => '#54595f',
							'contentWeight' => '500',
							'contentLetter' => '0',
							'contentUpper' => false,
							'contentStyle' => 'normal',
							'contentfontSize' => '20',
							'contentfontSizeMobile' => '20',
							'contentfontSizeTablet' => '20',
							'contentfontSizeType' => 'px',
							'type'  => 'horizontal',
							'tabShadowHorizontal' => '1',
							'tabShadowVertical' => '1',
							'tabShadowBlur' => '1',
							'tabShadowColor' => 'undefined',
							'tabShadowPosition' => '',
							'tabsBorderColor' => '#7a7a7a',
							'activetabBGColor' => '#7a7a7a',
							'arrowColor' => '#6ec1e4',
							'iconfontSize' => '20',
							'iconfontSizeType' => 'px',
							'iconfontSizeMobile' => '20',
							'iconfontSizeTablet' => '20',
							'iconborderType' => 'none',
							'iconborderWidth' => '1',
							'iconborderRadius' => '0',
							'iconborderColor' => '#d4d4d4',
							'iconshadowHorizontal' => '1',
							'iconshadowVertical' => '1',
							'iconshadowBlur' => '1',
							'iconshadowColor' => 'undefined',
							'iconPadding' => '0',
							'iconPaddingType' => 'px',
							'iconPaddingMobile' => '0',
							'iconPaddingTablet' => '0',
							'iconColor' => '#54595f',
							'activeiconColor'=> '#6ec1e4',
							'hovericonColor' => '#54595f',
							'titleColor' => '#54595f',
							'titleshadowHorizontal' => '1',
							'titleshadowVertical' => '1',
							'titleshadowBlur' => '1',
							'titleshadowColor' => 'undefined',
							'titleMargin' => '0',
							'titleMarginType' => 'px',
							'titleMarginTablet' => '0',
							'titleMarginMobile' => '0',
							'hovertitleColor' => '#54595f',
							'contentBGColor' => '',
							'contentborderType' => 'none',
							'contentborderWidth' => '1',
							'contentborderColor' => '#d4d4d4',
							'contentborderRadius' => '0',
							'contentshadowHorizontal'=> '1',
							'contentshadowVertical'=> '1',
							'contentshadowBlur'=> '1',
							'contentshadowColor'=> 'undefined',
							'contentPadding' => '10',
							'contentPaddingType' => 'px',
							'contentPaddingMobile' => '10',
							'contentPaddingTablet' => '10',
							'contentShadowHorizontal'=> '1',
							'contentShadowVertical'=> '1',
							'contentShadowBlur'=> '1',
							'contentShadowColor'=> 'undefined',
							'contentShadowPosition'=> '',
							'tabBGHoverColor' => '',
							'tabhoverborderWidth' => '1',
							'tabhoverborderColor' => '#d4d4d4',
							'tabhoverborderType' => 'none',
							'tabhoverborderRadius' => '0',
							'tabhoverShadowHorizontal' => '1',
							'tabhoverShadowVertical' => '1',
							'tabhoverShadowBlur' => '1',
							'tabhoverShadowColor' => 'undefined',
							'tabhoverShadowPosition' => '',
							'tabPadding' => '1',
							'tabPaddingType' => 'em',
							'tabPaddingTablet' => '1',
							'tabPaddingMobile' => '1',
							'tabMargin' => '0',
							'tabMarginType' => 'px',
							'tabMarginTablet' => '0',
							'tabMarginMobile' => '0',
							'iconHoverColor' => '#7a7a7a',
							'tabWidth' => '100'
						)
						),
						'premium/fancy-text'         => array(
						'slug'        => '',
						'default'     => true,
						'attributes'  => array(
							'classMigrate'     => false,
							'align'            => 'center',
							'block_id'        => '',
							'fancyTextColor' => '#6ec1e4',
							'fancyTextfontSize' => '40',
							'fancyTextfontSizeType' => 'px',
							'fancyTextfontSizeMobile' => '40',
							'fancyTextfontSizeTablet' => '40',
							'fancyTextWeight' => '600',
							'fancyTextUpper' => false,
							'fancyTextStyle' => '',
							'fancyTextLetter' => '',
							'fancyTextBGColor' => '',
							'shadowColor' => '',
							'shadowBlur' => '1',
							'shadowHorizontal' => '1',
							'shadowVertical' => '1',
							'cursorColor' => '#6ec1e4',
							'textColor' => '#54595f',
							'TextfontSize' => '40',
							'TextfontSizeType' => 'px',
							'TextfontSizeMobile' => '40',
							'TextfontSizeTablet' => '40',
							'TextWeight' => '600',
							'TextLetter' => '',
							'TextUpper' => false,
							'TextStyle' => '',
							'TextBGColor' => ''
						)
						),
						'premium/title'         => array(
						'slug'        => '',
						'default'     => true,
						'attributes'  => array(
							'classMigrate'     => false,
							'align'            => 'center',
							'block_id'        => '',
							'stripeWidth' => '120',
							'stripeHeight' => '5',
							'stripeTopSpacing' => '0',
							'stripeBottomSpacing' => '0',
							'titleColor' => '#6ec1e4',
							'titleWeight' => '600',
							'titleLetter' => '0',
							'titleUpper' => false,
							'titleStyle' => 'normal',
							'titlefontSize' => '30',
							'titlefontSizeMobile' => '30',
							'titlefontSizeTablet' => '30',
							'titlefontSizeType' => 'px',
							'titleshadowBlur' => '1',
							'titleshadowColor' => 'undefined',
							'titleshadowHorizontal' => '1',
							'titleshadowVertical' => '1',
							'stripeColor' => '#6ec1e4',
							'titleborderType' => 'none',
							'titleborderRadius' => '0',
							'titleborderWidth' => '1',
							'titleborderColor' => '#d4d4d4',
							'BGColor' => '#54595f',
							'lineColor' => '#6ec1e4',
							'triangleColor' => '#6ec1e4',
							'iconColor' => '#6ec1e4',
							'iconSize' => '30',
							'iconSizeType' => 'px',
							'iconSizeTablet' => '30',
							'iconSizeMobile' => '30',
							'iconborderType' => 'none',
							'iconborderRadius' => '0',
							'iconborderWidth' => '1',
							'iconborderColor' => '#d4d4d4',
							'iconshadowBlur' => '1',
							'iconshadowColor' => 'undefined',
							'iconshadowHorizontal' => '1',
							'iconshadowVertical' => '1',
							'titleMargin' => '0',
							'titleMarginType' => 'px',
							'titleMarginMobile' => '0',
							'titleMarginTablet' => '0',
							'titlePadding' => '0',
							'titlePaddingTablet' => '0',
							'titlePaddingType' => 'px',
							'titlePaddingMobile' => '0',
							'iconBGColor' => '',
							'iconPadding' => '0',
							'iconPaddingType' => 'px',
							'iconPaddingMobile' => '0',
							'iconPaddingTablet' => '0',
							'iconSpacing' => '10',
							'iconSpacingType' => 'px',
							'iconSpacingMobile' => '10',
							'iconSpacingTablet' => '10',
							'image' => ''
						)
						)
				);
			}
			return self::$block_attributes;
		}
	}
}
