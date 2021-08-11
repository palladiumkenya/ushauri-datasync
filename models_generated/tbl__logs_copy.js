const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl__logs_copy', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key "
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Foreign key to table group",
      references: {
        model: 'tbl_groups',
        key: 'id'
      }
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Foreign key to table language",
      references: {
        model: 'tbl_language',
        key: 'id'
      }
    },
    facility_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clinic_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "used to form the  compound key for each client",
      unique: "clinic_number"
    },
    db_source: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ushauri_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    f_name: {
      type: DataTypes.STRING(244),
      allowNull: true,
      unique: "clinic_number_2"
    },
    m_name: {
      type: DataTypes.STRING(244),
      allowNull: true,
      unique: "clinic_number_2"
    },
    l_name: {
      type: DataTypes.STRING(244),
      allowNull: true,
      unique: "clinic_number_2"
    },
    dob: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    client_status: {
      type: DataTypes.ENUM('ART','On Care','Pre ART','No Condition'),
      allowNull: true
    },
    txt_frequency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 168,
      comment: "how frequenct should we check up on our client by default it's 168 ( whic is 1 week) "
    },
    txt_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "foreign key to table time"
    },
    phone_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "phone used to text the client"
    },
    alt_phone_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shared_no_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    smsenable: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      comment: "conent field for either client has accepted to receive messages "
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.ENUM('Active','Dead','Disabled','Deceased','Self Transfer','Transfer Out'),
      allowNull: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "foreign key to the master facility table ",
      references: {
        model: 'tbl_master_facility',
        key: 'code'
      },
      unique: "clinic_number_2"
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_gender',
        key: 'id'
      }
    },
    marital: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tbl_marital_status',
        key: 'id'
      }
    },
    enrollment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    art_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    wellness_enable: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true
    },
    motivational_enable: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true
    },
    client_type: {
      type: DataTypes.ENUM('New','Transfer','Self Transfer','Transfer In','Transfer Out'),
      allowNull: true
    },
    age_group: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prev_clinic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transfer_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    entry_point: {
      type: DataTypes.ENUM('Web','Mobile','EMR','ADT','IL'),
      allowNull: true
    },
    welcome_sent: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: "No"
    },
    stable: {
      type: DataTypes.ENUM('Yes','No','Stable','Un Stable'),
      allowNull: true,
      defaultValue: "Yes"
    },
    physical_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    consent_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    GODS_NUMBER: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DEATH_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PATIENT_SOURCE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SENDING_APPLICATION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    clnd_dob: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    clinic_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "foreign key for table clinic",
      references: {
        model: 'tbl_clinic',
        key: 'id'
      }
    },
    national_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    buddy_phone_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_deceased: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    locator_county: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    locator_sub_county: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    locator_ward: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    locator_village: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    locator_location: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl__logs_copy',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "clinic_number_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clinic_number" },
          { name: "mfl_code" },
          { name: "f_name" },
          { name: "m_name" },
          { name: "l_name" },
        ]
      },
      {
        name: "clinic_number",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clinic_number" },
        ]
      },
      {
        name: "group_id",
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "language_id",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
      {
        name: "gender",
        using: "BTREE",
        fields: [
          { name: "gender" },
        ]
      },
      {
        name: "marital",
        using: "BTREE",
        fields: [
          { name: "marital" },
        ]
      },
      {
        name: "date_added",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "mfl_code",
        using: "BTREE",
        fields: [
          { name: "mfl_code" },
        ]
      },
      {
        name: "clinic_id",
        using: "BTREE",
        fields: [
          { name: "clinic_id" },
        ]
      },
    ]
  });
};
