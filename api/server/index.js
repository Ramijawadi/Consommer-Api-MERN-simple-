const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Utilisez cors pour éviter des problèmes de Cross-Origin Resource Sharing (CORS)

app.get('/api/data', (req, res) => {
 res.json({message :'hello api' })
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
