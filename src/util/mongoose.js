module.exports = {
    mutipleMongooseToObject: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject()) //create object literal
    },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}