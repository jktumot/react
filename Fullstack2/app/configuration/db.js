module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "postgresFox2017",
    DB: "Infobase",
    dialect: "postgres",
    port: 5433,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        }
};