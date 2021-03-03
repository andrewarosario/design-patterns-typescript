import { MyDatabaseModule } from './db/my-database-module';

const db1 = MyDatabaseModule;
db1.add({ name: 'Andrew', age: 26 });
db1.add({ name: 'Andre', age: 27 });
db1.add({ name: 'Anderson', age: 28 });

export { db1 };
