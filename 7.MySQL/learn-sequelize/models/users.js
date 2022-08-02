const Sequelize = require('sequelize');

module.exports=class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            first_name:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            last_name:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            mobile_number:{
                type:Sequelize.STRING(25),
                allowNull:false,
                unique: true,
            },
            email:{
                type:Sequelize.STRING(100),
                allowNull:false,
                unique: true,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'User',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db) {
        db.User.hasMany(db.Post,{foreignKey:'post',sourceKey:'id'});
    }
};