const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_future_appointments_query', {
    file_no: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    group_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    language_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    app_type_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Foreign key to table appointment types"
    },
    appointment_types_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "primary key for table appointment types"
    },
    appointment_types: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    f_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    m_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    l_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dob: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    STATUS: {
      type: DataTypes.ENUM('Active','Dead','Disabled','Deceased','Self Transfer','Transfer Out','LTFU'),
      allowNull: true
    },
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "foreign key to the master facility table "
    },
    phone_no: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "phone used to text the client"
    },
    clinic_number: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "used to form the  compound key for each client"
    },
    enrollment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Primary key "
    },
    client_status: {
      type: DataTypes.ENUM('ART','On Care','Pre-ART','No Condition'),
      allowNull: true
    },
    txt_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "how frequenct should we check up on our client by default it's 168 ( whic is 1 week) "
    },
    txt_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "foreign key to table time"
    },
    alt_phone_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    shared_no_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    smsenable: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      comment: "conent field for either client has accepted to receive messages "
    },
    appntmnt_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    app_msg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_future_appointments_query',
    timestamps: false
  });
};
