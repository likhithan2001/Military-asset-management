const bcrypt = require('bcryptjs');
const User = require('./models/User');
const sequelize = require('./config/database');

(async() => {
    try {
        await sequelize.sync();

        const existing = await User.findOne({ where: { email: 'admin@example.com' } });
        if (existing) {
            console.log('⚠️ Admin already exists');
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash('admin123', 10);
        await User.create({
            name: 'Admin User',
            email: 'admin@example.com',
            password: hashedPassword,
            role: 'admin'
        });

        console.log('✅ Admin user created');
        process.exit(0);
    } catch (err) {
        console.error('❌ Failed to seed admin user:', err);
        process.exit(1);
    }
})();