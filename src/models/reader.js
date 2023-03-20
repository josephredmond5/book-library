module.exports = (connection, DataTypes) => {
    const schema = {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    };
  
    const ReaderModel = connection.define('Reader', schema);
    return ReaderModel;
  };
  
  exports.createReader = (req, res) => {
    res.status(201).send('success');
  };