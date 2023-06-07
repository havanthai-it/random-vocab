import Search from "../../components/Search/Search";
import VocabCard from "../../components/VocabCard/VocabCard";
import BookmarkList from "../../components/BookmarkList/BookmarkList";

const Home = ({ mainColor, setMainColor }) => {
    return (
        <div>
            <Search mainColor={mainColor} setMainColor={setMainColor} />
            <VocabCard mainColor={mainColor} />
            <BookmarkList />
        </div>
    )
}

export default Home;
