import { RestaurantWithDistance } from "../utils/types";
import RestaurantRow from "./RestaurantRow";

interface RestaurantTableProps {
    restaurants: RestaurantWithDistance[];
}

const RestaurantTable = ({ restaurants }: RestaurantTableProps) => {
    return (
        <article>
            <h2>Lunch Locations</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cuisine</th>
                        <th>Distance</th>
                        <th>Diet Options</th>
                        <th>Card Payment</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map(restaurant => (
                        <RestaurantRow key={restaurant.id} restaurant={restaurant} />
                    ))}
                </tbody>
            </table>
        </article>
    );
};

export default RestaurantTable; 