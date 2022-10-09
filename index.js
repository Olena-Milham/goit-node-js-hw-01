const { program } = require("commander");

const contacts = require("./contacts");
// console.log(contacts);

invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    case "getContactById":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;
    case "addContact":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;
    case "removeById":
      const removedContact = await contacts.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.log("Unknown action");
  }
};

// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id: "1" });
// invokeAction({
//   action: "addContact",
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });
// invokeAction({ action: "removeById", id: "a5yL8JlHVjSTGyxCkVBPN" });

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-em, --email <type>")
  .option("-ph, --phone <type>");

program.parse();

const options = program.opts();
console.log(options);
invokeAction(options);
