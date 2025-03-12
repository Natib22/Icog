const app = require('express')();
const userRoutes = require('./routes/routes');
const cors = require('cors');
app.use(require('express').json());
app.use(cors({
    origin: '*'
}));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.use('/', userRoutes);


