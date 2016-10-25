
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      let products = 
                [
                    { id: 11, name: 'Iphone', price: 169 },
                    { id: 12, name: 'Ipad', price: 199 },
                    { id: 13, name: 'Iwatch', price: 249 },
                    { id: 14, name: 'ITV', price: 299 },
                    { id: 15, name: 'Node', price: 229 },
                    { id: 16, name: 'Labtop', price: 399 },
                    { id: 17, name: 'Moniter', price: 499 },
                    { id: 18, name: 'System', price: 599 },
                    { id: 19, name: 'TV', price: 799 },
                    { id: 20, name: 'Radio', price: 299 }
                ];

            return {products};
        }
}

