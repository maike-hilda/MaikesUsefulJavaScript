// getters and setters using closure
function getSet() {
    let drink = "juice";
        return {
            getDrink() {
                return drink;
            },
            setDrink(drinkSet) {
                drink = drinkSet;
                return drink; 
            }
        }
}

let instanceOfDrink = getSet();
console.log(instanceOfDrink.getDrink());
console.log(instanceOfDrink.setDrink("beer"));