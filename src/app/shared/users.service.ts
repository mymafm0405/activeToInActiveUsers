import { Injectable } from "@angular/core";

import { CounterService } from "./counter.service";
import { User } from "./user.model";

@Injectable()
export class UsersService {
  constructor(private counterService: CounterService) {}
  
  activeUsers: User[] = [new User("Max", 0, 0), new User("Anna", 0, 0)];
  inactiveUsers = [new User("Chris", 0, 0), new User("Manu", 0, 0)];

  onSetToInactive(id: number) {
    this.activeUsers[id].inActCount++;
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.inactiveUsers[id].actCount++;
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
