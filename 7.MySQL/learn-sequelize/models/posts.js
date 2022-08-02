const Sequelize = require('sequelize');

module.exports=class Post extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            content:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            create_at:{
                type:Sequelize.DATE,
                allowNull:true,
                defaultValue:Sequelize.NOW,
            },
            
        },{
            sequelize,
            timestamps:false,
            modelName:'POST',
            tableName:'posts',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db) {
        db.User.hasMany(db.User,{foreignKey:'user',sourceKey:'id'});
    }
};