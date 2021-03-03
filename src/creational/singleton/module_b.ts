import { MyDatabaseModule } from './db/my-database-module';
import { db1 } from './module_a';

const db2 = MyDatabaseModule;
db2.add({ name: 'Roberto', age: 26 });
db2.add({ name: 'Joana', age: 27 });
db2.add({ name: 'Luiza', age: 28 });
db2.show();

console.log(db1 === db2);
