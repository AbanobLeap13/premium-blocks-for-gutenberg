import { Fragment } from "react";

const { dateI18n, format, __experimentalGetSettings } = wp.date;

class Meta extends React.Component {
  render() {
    const { post, attributes, categoriesList } = this.props;
    const dateFormat = __experimentalGetSettings().formats.date;
    let categoryObject = [];
    if (categoriesList) {
      categoriesList.map((item, thisIndex) => {
        if (post.categories && item.id == post.categories[thisIndex]) {
          categoryObject.push(item);
          //alert(item);
        }
      });
    }
    return (
      <Fragment>
        <div className="uagb-post-grid-byline">
          {attributes.displayPostAuthor && undefined !== post.uagb_author_info && (
            <span className="premium-blog-post-author premium-blog-meta-data">
              <span className="fa fa-user fa-fw"></span>
              <a
                target="_blank"
                href={post.uagb_author_info.author_link}
                rel="noopener noreferrer"
              >
                {post.uagb_author_info.display_name}
              </a>
            </span>
          )}
          <span className={`premium-blog-meta-separtor`}>•</span>
          {attributes.displayPostDate && post.date_gmt && (
            <div className={`premium-blog-post-time premium-blog-meta-data`}>
              <time
                dateTime={format("c", post.date_gmt)}
                className="uagb-post__date"
              >
                <span className="fa fa-clock-o"></span>
                {dateI18n(dateFormat, post.date_gmt)}
              </time>
            </div>
          )}
          <span className={`premium-blog-meta-separtor`}>•</span>
          {attributes.displayPostComment &&
            undefined !== post.uagb_comment_info && (
              <div
                className={`premium-blog-post-comments premium-blog-meta-data`}
              >
                <span className="premium-post__comment">
                  <span className="dashicons-admin-comments dashicons"></span>
                  {post.uagb_comment_info}
                </span>
              </div>
            )}
          <span className={`premium-blog-meta-separtor`}>•</span>
          {attributes.displayPostCategories && "" !== categoryObject && (
            <div
              className={`premium-blog-post-categories premium-blog-meta-data`}
            >
              <span className="premium-post__taxonomy">
                <span className="fa fa-align-left fa-fw"></span>
                {categoryObject.length === 0
                  ? "Uncategorized"
                  : categoryObject.map((category) => (
                      <span>{category.name + " "}</span>
                    ))}
              </span>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Meta;
