import { IoAdapter } from '@nestjs/platform-socket.io';
import redisAdapter from 'socket.io-redis';

import * as redisIoAdapter from 'socket.io-redis';
import { createAdapter } from 'socket.io-redis';
import { createClient } from 'redis';
import { Server } from 'socket.io';
import { RedisClient } from 'redis';

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number): any {
    // const server = super.createIOServer(port);
    // const redisAdapter = redisAdapter({ host: 'localhost', port: 6379 }));
    // server.adapter(redisAdapter);
    // return server;
    // const io = new Server();
    // const pubClient = createClient({ host: 'localhost', port: 6379 });
    // const subClient = pubClient.duplicate();
    // io.adapter(createAdapter(pubClient, subClient));
    // return io;

    const io = new Server(8080);
    const pubClient = new RedisClient({ host: 'localhost', port: 6379 });
    const subClient = pubClient.duplicate();

    io.adapter(createAdapter({ pubClient, subClient }));

    return io;
  }
}
