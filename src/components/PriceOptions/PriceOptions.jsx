import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

        const PriceOptions = [
            {
                "id": 1,
                "name": "Basic Membership",
                "price": 29.99,
                "features": [
                    "Access to cardio equipment",
                    "Access to weightlifting area",
                    "Locker room access",
                    "Personalized fitness assessment",
                    "One complimentary fitness class per month",
                    "Online workout tracking",
                    "Discounts on gym merchandise"
                ]
            },
            {
                "id": 2,
                "name": "Premium Membership",
                "price": 49.99,
                "features": [
                    "Unlimited access to all gym facilities",
                    "Access to sauna and steam room",
                    "Complimentary towel service",
                    "Personalized workout plans",
                    "Unlimited fitness classes",
                    "Discounts on personal training sessions",
                    "Monthly nutrition consultation",
                    "Priority class reservations"
                ]
            },
            {
                "id": 3,
                "name": "Family Membership",
                "price": 89.99,
                "features": [
                    "Access for two adults and up to two children",
                    "Access to family-friendly fitness classes",
                    "Family locker room",
                    "Childcare services",
                    "Discounts on additional child memberships",
                    "Access to outdoor recreational area",
                    "Monthly family fitness challenges"
                ]
            }
        ];


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Price in the Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;