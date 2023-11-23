class TicketFull {
  constructor(id, name, description, status, date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.created = date;
  }
}

module.exports = TicketFull;
