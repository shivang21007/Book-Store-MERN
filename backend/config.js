import dotenv from 'dotenv'
dotenv.config();

export const PORT = process.env.PORT || 5555;
//console.log(`${process.env.PORT_}`);

export const mongoDBURL =
  `mongodb+srv://${process.env.USER_NAME}:${process.env.PASS}@cluster0.g45jtre.mongodb.net/?retryWrites=true&w=majority`;

// console.log(process.env.USER_NAME);

// Please create a free database for yourself.
// This database will be deleted after tutorial