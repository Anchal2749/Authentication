// import { app } from "./app.js";

// app.listen(process.env.PORT, () => {
//   console.log(`Server listening on port ${process.env.PORT}`);
// });


import { app } from "./app.js";

// Add default port and specify host
const port = process.env.PORT || 4000;  // Fallback for local development

app.listen(port, '0.0.0.0', () => {  // Explicitly bind to all interfaces
  console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to Auth');
});
