import classnames from "classnames"

export default function save(props) {

  const { attributes, className } = props

  const {
    block_id,
    align,
    repeaterAccordion,
    defaultIndex,
    direction,
    skew,
    skewdirection,
    screenWidth,
    verticalalign
  } = attributes

  const renderList = repeaterAccordion.map((item, index) => {
    return <li className={`premium-accordion-li premium-accordion-li${index} ${defaultIndex-1 == index ? 'premium-accordion-li-active' : ""}`}>
      {!skew || direction==='vertical' ? <div className="premium-accordion-background"></div>:""}
      <div className="premium-accordion-overlay-wrap" style={{ justifyContent: align==='right'? 'flex-end': align, alignItems: verticalalign }}>
        {item.content&&<div className={`premium-accordion-content premium-accordion-${align}`}>
          {item.iconValue&& <i className={`premium-accordion-icon ${item.icon}`}/>}
          {item.title&& <h3 className="premium-accordion-title">{item.title}</h3>}
          {item.desc&& <div className="premium-accordion-description">{item.desc}</div>}
          {item.link&& <a className="premium-accordion-description" href={`${item.url}`} target={item.linkTarget ? "_blank" : "_self"} rel="noopener noreferrer"/>}
        </div>
        }
      </div>
    </li>
  })

    return (
        <div
          className={classnames(
              className,
              `premium-block-${block_id}`
          )} id={`premium-accordion-${block_id}`}
          style={{
              textAlign: align,
          }}>
            <div className="premium-accordion-container">
              <div className="premium-accordion-section" data-skew={`${skew && direction==='horizontal'?skewdirection: ""}`} data-hideDesc={`${screenWidth}`}>
                <div className={`premium-accordion-${direction} premium-accordion-${skew&& direction==='horizontal'?"skew":""}`}>
                  <ul className={`premium-accordion-ul premium-accordion-center`}>
                    {renderList}
                  </ul>
                </div>
              </div>
            </div>
        </div>
    )
}