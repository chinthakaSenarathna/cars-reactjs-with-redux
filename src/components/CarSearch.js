import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch(){
    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    });

    const handleChangeSearchTerm = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    };

    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input
                    className="input"
                    value={searchTerm}
                    onChange={handleChangeSearchTerm}
                />
            </div>
        </div>
    );
}

export default CarSearch;