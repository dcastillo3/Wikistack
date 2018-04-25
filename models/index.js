const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});


const Page = db.define('page', {
    title: {
        type: Sequelize.STRING, 
        allowNull: false, 
        defaultValue: 'Wikipage'
    },
    urltitle: {
        type: Sequelize.STRING, 
        allowNull: false, 
        defaultValue: 'Wikipage'
    },
    content: {
        type: Sequelize.TEXT, 
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    getterMethods: {
        route() {
            return `/wiki/${this.urltitle}`;
        }
    }
});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    email: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

module.exports = {
    Page: Page,
    User: User
  };