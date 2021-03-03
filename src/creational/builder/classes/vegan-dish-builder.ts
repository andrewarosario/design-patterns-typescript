import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal = new MealBox();

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    this._meal.add(rice, beans);
    return this;
  }

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
