module.exports = (sequelize, DataTypes) => {
    const Gem = sequelize.define('gem', {
        locationType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        locationAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        locationCoordinates: {
            type: DataTypes.STRING,
            allowNull: false
                    
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Gem;
} 