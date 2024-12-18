const mongoose = require("mongoose");
const { Schema } = mongoose;

const mahasiswaSchema = new Schema({
  nama: String,
  npm: { type: String, required: true },
  email: { type: String, required: true },
  tanggal_lahir: Date,
  aktif: Boolean,
});

const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);
module.exports = Mahasiswa;
