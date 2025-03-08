
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes'); 
const employeeDataRoutes = require('./routes/employeeData');
const departmentRoutes = require('./routes/departmentData');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/data', employeeDataRoutes);
app.use('/departments', departmentRoutes);
app.get('/', (req, res) => {
  res.send('Payroll Backend API is running!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
