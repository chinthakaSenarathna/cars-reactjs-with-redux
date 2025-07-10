import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList(){
    const dispatch = useDispatch();

    const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
        const filterData = data.filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
            cars: filterData,
            name: form.name
        }
    });

    const handleCarDelete = (car) => {
        console.log(car);
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold && 'has-text-weight-bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger"
                    onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        )
    });

    return (
        <div>
           {renderedCars}
           <hr/> 
        </div>
    );
}

export default CarList;