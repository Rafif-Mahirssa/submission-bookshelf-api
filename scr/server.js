//Import Modul dan Fungsi
const Hapi = require('@hapi/hapi');
const routes = require('./routes');


//Inisialisasi Server
const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
          cors: {
            origin: ['*'],
          },
        },
      });

//Mengatur Rute
    server.route(routes);

//Menjalankan Server
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
  };

  
  init();