import { Component } from "react";

import Modal from "./Modal/Modal";

import SearchForm from "./Searchform/SearchForm";
import ImageGallery from "./ImageGallery/ImageGallery";
import BigImage from "./ImageGallery/BigImage/BigImage";

import { searchImages } from "shared/services/images-api";

import styles from "./searchbar.module.css";

class Searchbar extends Component {
    state = {
        search: "",
        items: [],
        loading: false,
        error: null,
        page: 1,
        showModal: false,
        bigImg:null,
        }

    componentDidUpdate(prevProps, prevState) {
        const {search, page} = this.state;
        if(prevState.search !== search || prevState.page !== page) {
            this.fetchImages();
        }
    }

    async fetchImages() {
        try {
            this.setState({loading: true});
            const {search, page} = this.state;
            const data = await searchImages(search, page);
            this.setState(({items}) => ({
                items: [...items, ...data]
                
            }))
            
        }
        catch(error) {
            this.setState({error: error.message})
        }
        finally {
            this.setState({loading: false})
        }
    }

    searchImages = ({search})=> {
        this.setState({search, items: [], page: 1});
    }

    loadMore = ()=> {
        this.setState(({page}) => ({page: page + 1}))
    }

    showImage = ({largeImageURL}) => {
        this.setState({
            bigImg : {largeImageURL},
            showModal: true,
        })
    }

    closeModal = ()=> {
        this.setState({
            showModal: false,
            bigImg: null,
        })
    }

    render() {
        
        const { items, loading, error, showModal, bigImg } = this.state;
        const {searchImages, loadMore, showImages, closeModal} = this;
        
        return (
            <>
            <SearchForm onSubmit={searchImages}/>
                <ImageGallery items={items} showImages={showImages}/>
                {error && <p>{error}</p>}
                {loading && <p>...Load images</p>}
                {Boolean(items.length) && <button onClick={loadMore} className={styles.button}>Load more</button>}
                {showModal && <Modal close={closeModal}><BigImage {...bigImg}/></Modal>}
            </>
        )
    }
}

export default Searchbar;