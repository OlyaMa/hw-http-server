const { v4: uuidv4 } = require("uuid");
const TicketFull = require("./TicketFull");

class Ticket {
  constructor(name, status) {
    this.id = uuidv4();
    this.name = name;
    this.status = status;
    this.created = Date.now();
  }

  createTicketFull(description) {
    return new TicketFull(
      this.id,
      this.name,
      description,
      this.status,
      this.created,
    );
  }
}

module.exports = Ticket;
