import styles from './image-gallery-item.module.css';

const ImageGalleryItem = ({ items }) => {
  return items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li key={id} className={styles.galleryItem}>
      <img
        src={largeImageURL}
        alt={tags}
        className={styles.image}
      />
    </li>
  ));
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  items: [],
};
