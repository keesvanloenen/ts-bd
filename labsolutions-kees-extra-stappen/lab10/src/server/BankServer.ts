import express, { response } from 'express';
import { Bank } from './Bank.js';
import { Customer } from '../shared/index.js';

export class BankServer {
  private app: express.Express;

  constructor(private bank: Bank) {
    this.app = express();
    this.app.use(express.json()); // accepteer json als input (body-parser is deprecated 😉)
    const router = this.createApiRouter();
    this.app.use('/api', router);
  }

  listen() {
    this.app.listen(this.bank.config.port);
    console.log(
      `Bank ${this.bank.config.name} listening on port ${this.bank.config.port}.`
    );
  }

  private createApiRouter() {
    const router = express.Router({ caseSensitive: false });

    router.get('/bank', (_, res) => {
      res.json(this.bank.config);
    });

    router.get('/accounts', (_, res) => {
      res.json(this.bank.getAccounts());
    });

    router.post('/customers', (req, res) => {
      console.log('server received: ', req.body);
      const maybeCustomer = req.body;

      if (this.isValid(maybeCustomer)) {
        const { firstName, lastName, insertion } = maybeCustomer;
        this.bank.createAccount(new Customer(firstName, lastName, insertion));
        res.status(204).send();
      } else {
        res.status(422).send('Customer entity invalid!');
      }
    });

    return router;
  }

  private isValid(customer: any): boolean {
    return (
      typeof customer?.firstName === 'string' &&
      typeof customer?.lastName === 'string' &&
      (!customer.insertion || typeof customer.insertion === 'string')
    );
  }
}
