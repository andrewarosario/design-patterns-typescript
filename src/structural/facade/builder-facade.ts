import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuilderFacade {
  // Essa é a fachada para a pasta src/creational/builder/index.ts

  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeDessert();
    console.log('Refeição => ', this.mainDishBuilder.getMeal());
    console.log('Preço => ', this.mainDishBuilder.getPrice());
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal2 = this.mainDishBuilder.makeDessert().getMeal();
    console.log({ meal2 });
  }

  makeMeal3(): void {
    const veganMeal = this.veganDishBuilder.makeMeal().getMeal();
    console.log('Refeição Vegana => ', veganMeal);
    console.log('Preço Refeição Vegana => ', veganMeal.getPrice());
  }
}
