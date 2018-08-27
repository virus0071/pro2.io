module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });
  User.associate = function (models) {
    User.hasOne(models.Meta)
  };
  User.associate = function (models) {
    User.hasMany(models.Post)
  };
  return User;
};
