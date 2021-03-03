import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();

console.log('Refeição => ', mainDishBuilder.getMeal());
console.log('Preço => ', mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeDessert().getMeal();
console.log({ meal2 });

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log('Refeição Vegana => ', veganMeal);
console.log('Preço Refeição Vegana => ', veganMeal.getPrice());
