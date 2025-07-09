import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm(){
    const dispatch = useDispatch();

    const { name, cost } = useSelector((state) => {
        return state.form;
    });

    const handleChangeName = (event) => {
        dispatch(changeName(event.target.value));
    }

    const handleChangeCost = (event) => {
        dispatch(changeCost(parseInt(event.target.value) || 0));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }));
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={handleChangeName}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input 
                            type="number"
                            value={cost || ''}
                            onChange={handleChangeCost}
                        />
                    </div>
                </div>
                <div className="field">
                    <button type="submit" className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CarForm;