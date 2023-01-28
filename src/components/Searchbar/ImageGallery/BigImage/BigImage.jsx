const BigImage = ({ largeImageURL, tags }) => {
  return (
    <div>
      <img
        src={largeImageURL}
        alt={tags}
        // className={styles.image}
      />
    </div>
  );
};

export default BigImage;
