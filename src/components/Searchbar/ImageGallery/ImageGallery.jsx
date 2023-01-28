import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import styles from './image-gallery.module.css';

const ImageGallery = ({ items, showImages }) => {
    return <ul className={styles.gallery}><ImageGalleryItem items={items} onClick={showImages}/></ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};