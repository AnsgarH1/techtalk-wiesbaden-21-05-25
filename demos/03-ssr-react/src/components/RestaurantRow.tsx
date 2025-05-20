import { createMapsLink, formatAddress, formatDiet, formatDistance, formatPayment } from "@/utils/formatText";
import { RestaurantWithDistance } from "../utils/types";

const RestaurantRow = ({ restaurant }: { restaurant: RestaurantWithDistance }) => {
    return (
        <tr>
            <th scope="row">{restaurant.name}</th>
            <td>{restaurant.cuisine ? restaurant.cuisine.join(", ") : "N/A"}</td>
            <td>{formatDistance(restaurant.distance)}</td>
            <td>{formatDiet(restaurant)}</td>
            <td>{formatPayment(restaurant)}</td>
            <td>
                <a href={createMapsLink(restaurant)} target="_blank" rel="noopener noreferrer">
                    {formatAddress(restaurant)}
                </a>
            </td>
        </tr>
    );
};

export default RestaurantRow; 