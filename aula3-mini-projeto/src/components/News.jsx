import PropTypes from 'prop-types'

export function News({ title }) {
    return (
        <div className="news">
            <div>
                <span>Noticia patrocinada</span>
            </div>
            <p className="title-news-today">
                {title}
            </p>
        </div>
    )
}

News.propTypes = {
    title: PropTypes.string.isRequired,
}