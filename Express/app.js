const express = require('express');
const app = express();
const PORT = 1000;
app.get('/', (req, res) => {
    res.send('this is my first server');
});
app.get('/img', (req, res) => {
    res.send('<img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg" alt="tree" width="100px" height="100px">');
});
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});